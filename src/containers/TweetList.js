import { connect } from 'react-redux'
import { matchPath } from 'react-router-dom'
import Tweetlist from '../components/TweetList'
import { fetchTweets } from '../actions/tweets'

const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname,
    { path: '/:ownerUsername' },
  )

  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : 'kaizerwing',
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist)
