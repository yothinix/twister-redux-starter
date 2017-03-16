import { FETCH_TWEETS_SUCCESS } from './types'

const fetchTweetSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets },
})

export {
  fetchTweetSuccess,
}
