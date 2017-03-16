import { connect } from 'react-redux'
import Tweetlist from '../components/TweetList'
import { fetchTweetsSuccess } from '../actions/tweets'

const mapStateToProps = state => ({
  tweets: state.tweets,
})

const mapDispatchToProps = dispatch => ({
  fetchTweetsSuccess: tweets => dispatch(fetchTweetsSuccess(tweets)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweetlist)
