import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import {SearchableDropdown} from '../../components'



import {VisitsActions} from '../../redux/actions';
import Style from './DistributorScreen.Styles.js'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class DistributorScreen extends Component {


  changeSearchFilter(params) {
     const {

      updateSearchFilters,

    } = this.props


    updateSearchFilters(params);
  }




  render() {
    return (
      <View style={{flex: 1}}>
        <View style={Style.searchFiltersContainer}>
            <SearchableDropdown
              dataSource={this.props.allDistributors}
              placeHolderText={'Select Distributors'}
              selectedValue={this.props.searchFilters['distributors']}
              onChange={(value) => this.changeSearchFilter({ edited_field: 'distributors', edited_value: value })}
              placeholder={'Select Distributors'}
              invalid={false}
              customPickerStyles={{ ...Style.picker }}
              labelStyles={{ ...Style.pickerLabel }}
          />
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => ({


  allDistributors:  state.visits.allDistributors,
  searchFilters:  state.visits.searchFilters,

});

const mapDispatchToProps = (dispatch) => ({

  updateSearchFilters: (params)    => dispatch(VisitsActions.updateDistributorSearchFilters(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DistributorScreen)