import { userConstants } from "../constants/userConsts";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        // Fetch User
        case userConstants.FETCH_USER_REQUEST:
            return {
                loading: true,
            }
        case userConstants.FETCH_USER_SUCCESS:
            return {
                loading: false,
                data: action.user
            }
        case userConstants.FETCH_USER_FAILURE:
            return {
                loading: false,
                error: action.error
            }
        // Update User
        case userConstants.UPDATE_USER_REQUEST:
            return {
                loading: true,
            }
        case userConstants.UPDATE_USER_SUCCESS:
            return {
                loading: false,
                updated: true,
                data: action.user
            }
        case userConstants.UPDATE_USER_FAILURE:
            return {
                loading: false,
                error: action.error
            }
        case userConstants.DELETE_USER:
            return {
                userDeleted: true,
            }
        // Find People
        case userConstants.FIND_PEOPLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.FIND_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                people: action.people
            }
        case userConstants.FIND_PEOPLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
};