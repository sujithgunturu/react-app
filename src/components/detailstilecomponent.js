import react from "react";
class Welcome extends react.Component {
    render() {
      return (
        <div className="tweet">
        <div className="name-username-icon">
            <div className="profile-picture"> </div>
            <div className="name-username">
                <div> {this.props.name} </div>
                <div> {this.props.username} </div>
            </div>
        </div>
        <div className="tweet-content"> {this.props.tweetcontent}</div>
        <div className="time-device"> <a href="https://www.w3schools.com/" target="_blank" className="nostyle">
                        {this.props.time} &nbsp;
                    </a> <a href="https://help.twitter.com/en/using-twitter/how-to-tweet#source-labels" target="_blank" className="nostyle">
                        Twitter for {this.props.device}
                    </a> </div>
        <div className="tweet-analytics"> <a className="nostyle" href="https://twitter.com/starlord_4/status/1514466589789274116/analytics" target="_blank">
                       view tweet {this.props.analytics} </a> </div>
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
