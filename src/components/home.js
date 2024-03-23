import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import PostComponent from './subcomponents/postComponent';
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      items: Array.from({length:5}),
      item: Array(),
      hasMore: true,
      news : ['asdasd ', 'sadsad' ],
      skip : 0,
      limit : 2,
    };
    let skip = 0
    let limit = 3
    // Initialy getting postsdata into item array
    
    axios.get('https://tiaraapi.herokuapp.com/PostsData/0/2')
      .then((response) => {
        if(response.status==200){
          this.setState({item : response.data })
          console.log(this.state.item)
        }
        else{
        }
      })
  }

  

  fetchMoreData = () => {
    
    this.setState({skip: this.state.skip + 2})
    
    if (this.state.items.length >= 50) {
      this.setState({ hasMore: false });
      return;
    }
    
    axios.get('https://tiaraapi.herokuapp.com/PostsData/'+this.state.skip+'/'+this.state.limit)
      .then((response) => {
        if(response.status==200){   
          this.setState({item : this.state.item.concat(response.data) })
          console.log(response.data)
        }
        else{
        }
    })
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.state.news)
      });
      
    }, 500);
    this.state.item.map((i,index) => console.log(index))
  };

  render() {
    return (
      <div id="posts" style={{ paddingBottom: 45,backgroundColor: 'white' }}>
        <div className="horizontalScroll">
          <div className="parentScroll scrollmenu">
            <span className="scrollButton parentButton-1">painting</span>
            <span className="scrollButton parentButton-2">photography</span>
            <span className="scrollButton parentButton-3">fasion</span>
            <span className="scrollButton parentButton-4">painting</span>
            <span className="scrollButton parentButton-5">painting</span>
          </div>
          <div className="childScroll scrollmenu ">
            <span className="scrollButton childButton-1">painting</span>
            <span className="scrollButton childButton-2">photography</span>
            <span className="scrollButton childButton-3">fasion</span>
            <span className="scrollButton childButton-4">painting</span>
          </div>
        </div>
        <InfiniteScroll
          dataLength={this.state.item.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.item.map((i, index) => (
            
            <PostComponent key={index} postsData={this.state.item[index]}/>
          ))}
        </InfiniteScroll>
        
      </div>
    )
  }

}
export default Home 