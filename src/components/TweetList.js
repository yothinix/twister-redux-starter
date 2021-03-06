import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    const ownerUsername = this.props.ownerUsername || 'kaizerwing'
    this.props.fetchTweets(ownerUsername)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ownerUsername !== nextProps.ownerUsername) {
      const ownerUsername = nextProps.ownerUsername || 'kaizerwing'
      this.props.fetchTweets(ownerUsername)
    }
  }

  render() {
    return (
      <div className="tweet-list">
        {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  fetchTweets: PropTypes.func.isRequired,
  ownerUsername: PropTypes.string.isRequired,
}

TweetList.defaultProps = {
  tweets: [],
}

export default TweetList
