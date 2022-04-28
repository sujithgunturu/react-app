import react from "react";
import { icons } from "react-icons";
import { BsFillBrushFill,
     BsFillSuitHeartFill } from "react-icons/bs";
import {SiSimpleanalytics} from "react-icons/si"

import {FaRetweet, FaReply} from "react-icons/fa"
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
                       <SiSimpleanalytics/> &nbsp; view tweet {this.props.analytics} </a> </div>
        <div className="reply-retweet-like-share">

            <div className="reply">
            <FaReply  className="reply"/>
            </div>

            <div className="retweet">
            <FaRetweet  className="retweet"/>
            </div>

            <div className="like">
            <BsFillSuitHeartFill  className="like"/>
            </div>

            <div className="share">
            <BsFillBrushFill  className="share"/>
            </div>
        </div>
    </div>
      )
    }
  }
  
  export default Welcome;
