import { connect } from 'react-redux'
import { matchPath } from 'react-router'
import Tweetlist from '../components/TweetList'
import { fetchTweets } from '../actions/tweets'

const mapStateToProps = (state) => {
  const { params } = matchPath(
    state.router.location.pathnae,
    { path: '/:ownerUsername' },
  )

  return {
    tweets: state.tweets,
    ownerUsername: params.ownerUsername,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist)
