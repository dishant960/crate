
import axios from 'axios'
import { query } from 'gql-query-builder'
import { routeApi } from '../../../setup/routes'

export const USERS_GET_LIST_REQUEST = 'USERS/GET_LIST_REQUEST'
export const USERS_GET_LIST_RESPONSE = 'USERS/GET_LIST_RESPONSE'
export const USERS_GET_LIST_FAILURE = 'USERS/GET_LIST_FAILURE'


export function getList(isLoading = true) {
    return dispatch => {
      dispatch({
        type: USERS_GET_LIST_REQUEST,
        error: null,
        isLoading
      })
  
      return axios.post(routeApi, query({
        operation: 'users',
        fields: ['id', 'name', 'email', 'createdAt', 'updatedAt']
      }))
        .then(response => {
          if (response.status === 200) {
            dispatch({
              type: USERS_GET_LIST_RESPONSE,
              error: null,
              isLoading: false,
              list: response.data.data.users
            })
          } else {
            console.error(response)
          }
        })
        .catch(error => {
          dispatch({
            type: USERS_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        })
    }
  }