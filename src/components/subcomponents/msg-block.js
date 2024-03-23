import React from 'react'

function MsgBlock(props) {
    return(
        <div className= "msg-block">
            <div className="msg-block-profile">
              <img src="user.png" alt="" style={{width: 100+'%',height: 100+'%'}}></img>
            </div>
            <div className="msg-block-details">
            <div className="msg-block-user-name">{props.postId}</div>
            <div className="msg-block-reply">sdfsdf</div>
            </div>
            <div className="msg-block-seprator">
              <hr></hr>
            </div>
          </div>
    )
}
export default MsgBlock;