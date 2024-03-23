import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import messagedata from "../data/messagedata"
import MsgBlock from './subcomponents/msg-block'


class Messages extends React.Component {
  state = {
    items: Array.from({ length: 15 }),
    id: [{ids:'dsd'}],
    // id: ['deepak','raj','rishi','kmonika','debra','atom','fey','shobha','new'],
    // id:[9,2,7,5,8,74,6],
    hasMore: true,
  };

  fetchMoreData = () => {
    let Msglength = 5 

    if (this.state.items.length >= messagedata[0].totalMsgbox) {
      this.setState({ hasMore: false });
      return;
    }
    if (messagedata[0].totalMsgbox - this.state.items.length < 5){
      Msglength = 1 
    }

    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: Msglength })),
      });
    }, 500);
  };

  render() {
    console.log(messagedata[1].message);
    return (
      <div className="main">
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <MsgBlock key={[messagedata[index].id]} postId={index} />
          ))}
        </InfiniteScroll>

      </div>
    )
  }
}

export default Messages