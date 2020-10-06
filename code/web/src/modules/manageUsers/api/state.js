import {
    USERS_GET_LIST_REQUEST,
    USERS_GET_LIST_RESPONSE,
    USERS_GET_LIST_FAILURE
  } from './actions'

const usersInitialState = {
    isLoading: false,
    error: null,
    list: []
  }
  
  // State
  export const users = (state = usersInitialState, action) => {
    switch (action.type) {
      case USERS_GET_LIST_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
          error: null
        }
  
      case USERS_GET_LIST_RESPONSE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          list: action.list
        }
  
      case USERS_GET_LIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
  
      default:
        return state
    }
  }
  