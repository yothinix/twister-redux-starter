import { connect } from 'react-redux'
import Tweetlist from '../components/TweetList'
import { fetchTweetSuccess } from '../actions/tweets'

const mapStateToProps = state => ({
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweetSuccess: () => dispatch(fetchTweetSuccess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist)
