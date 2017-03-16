import { connect } from 'react-redux'
import Tweetlist from '../components/TweetList'
import { fetchTweets } from '../actions/tweets'

const mapStateToProps = state => ({
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist)
