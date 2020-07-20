import React from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {getAttachmentIdFromEntityId} from '../utils/api/product.api';
import {Config} from '../../config';

class ServerImage extends React.Component {
  state = {imageUrl: void 0};
  
  render() {
    const {imageUrl} = this.state;
    const {token, height, width} = this.props;
    return (
      <View style={{height, width}}>
        {imageUrl && token && (
          <Image
            style={{height, width}}
            resizeMode={'cover'}
            source={{
              uri: imageUrl,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }}
            onError={this.props.onError}
          />
        )}
      </View>
    );
  }

  componentDidMount() {
    const {entityId, token, onError} = this.props;
    getAttachmentIdFromEntityId(entityId, token).then(attachmentId => {
      if (!attachmentId) {
        onError &&
          onError({nativeEvent: {error: 'unable to get attachment id'}});
        return;
      }
      this.setState({
        imageUrl: Config.GET_ATTACHMENT_URL.replace(
          '__attachmentId__',
          attachmentId,
        ),
      });
    });
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
});

export default connect(mapStateToProps)(ServerImage);
