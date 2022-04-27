import react from "react";
class Welcome extends react.Component {
    render() {
      return (
      <div className="tweet">
           <h3>Tweet from {this.props.name}</h3>
           <div className="name-username-icon"></div>
            <div className="time-device">
                <a>
                    11:41 AM · Jan 7,
                </a>
                <a>
                    2022· Twitter for Android
                </a>
            </div>
            <div className="tweet-analytics">
                view Tweet analytics
            </div>
            <div className="reply-retweet-like-share">
                <div className="Reply"></div>
                <div className="Retweet"></div>
                <div className="Like"></div>
                <div className="Share"></div>
            </div>
      </div>
      )
    }
  }
  
  export default Welcome;
