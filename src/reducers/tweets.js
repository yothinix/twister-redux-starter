import { FETCH_TWEETS_SUCCESS } from '../actions/types'

const tweetsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS: {
      return action.payload.tweets
    }
    default: {
      return state
    }
  }
}

export default tweetsReducer
