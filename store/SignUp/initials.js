export const INITIAL_STATE = {
    Email: '', //
    Password: '',//password for user
    Phone : '',
    City : '',
    FirstName: '',
    LastName : '',


    userLoginIsLoading: false,
    userLoginErrorMessage: false,
    validation: {
        invalid_number: false,
        invalid_password: false,
        invalid_area: false,
        error_message: '',
    },
    area: '',
    latitude: '',
    longitude: '',
    agentAreas: [],

}