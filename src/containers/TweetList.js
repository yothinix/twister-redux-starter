import { connect } from 'react-redux'
import Tweetlist from '../components/TweetList'

const mapStateToProps = (state) => ({
  tweets: state.tweets,
})

export default connect(mapStateToProps)(Tweetlist)
