import React from 'react'
import axios from 'axios'


class Login extends React.Component {
  constructor(prop) {
    super(prop);
    if(sessionStorage.getItem("token") != null){
      window.location = '/#/profile'
    }
      
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      email : "",
      password : "555555",
    }

    this.onClik = this.onClik.bind(this)
    //creating axios instance for ajax requests
    const axios = require('axios');
 
    HTMLElement.prototype.pseudoStyle = function (element, prop) {
      var _this = this;
      var _sheetId = "pseudoStyles";
      var _head = document.head || document.getElementsByTagName('head')[0];
      var _sheet = document.getElementById(_sheetId) || document.createElement('style');
      _sheet.id = _sheetId;
      var className = "diamond-narrow";

      _this.className += " " + className;

      _sheet.innerHTML += " #" + className + ":" + element + prop;
      console.log(_sheet.innerHTML)
      _head.appendChild(_sheet);
      console.log(_sheet)
      return this;
    };

    
    
  }
  
  // Make a request for a user with a given ID
 
  onClik() {

    var _email = document.getElementsByClassName('inp')[0].value;
    var _password = document.getElementsByClassName('inp')[1].value;
    
    

    axios.get('https://tiaraapi.herokuapp.com/'+_email+'/'+_password)
      .then((response) => {
        if(response.status===200){
          console.log(response)
          this.setState({
            items: response.data,
            email: _email 
          });
          window.location = '/#/profile'
          sessionStorage.setItem("token", JSON.stringify(response.data))
          
          console.log(this.state.items)
          console.log(this.state.email)
        }
        else{
          document.getElementsByClassName('error')[0].style = "display:block"
        }
       
      })

      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          document.getElementsByClassName('error')[0].style = "display:block"
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('Error');
          document.getElementsByClassName('error')[0].style = "display:block"
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error');
        }
        console.log(error.config);
      })
      .then(function () {
        // always executed

      });
    
  } 

  componentDidMount() {

    document.getElementsByTagName('body')[0].style.paddingTop = "0px";
    if (document.getElementById('diamond-narrow')) {
      let diamond = document.getElementById('diamond-narrow');
      diamond.style.border = window.innerWidth / 2 + 'px solid transparent';
      diamond.style.borderBottom = window.innerHeight / 2 + 'px solid red';
      diamond.style.top = -window.innerHeight / 2 + 'px';
      console.log(diamond.style.top)
      // diamond.style.breakAfter.border = window.innerWidth / 2 + 'px solid transparent';
      diamond.style.borderTop = window.innerHeight / 2 + 'px solid red';
      diamond.pseudoStyle("after", "{border:" + window.innerWidth / 2 + "px solid transparent; border-top:" + window.innerHeight / 2 + "px solid red;left:-" + window.innerWidth / 2 + "px;top:" + window.innerHeight / 2 + "px;}")
      // let x = document.getElementsByClassName('inp');
      // x[0].style.width = window.innerWidth-30+'px';
      // x[1].style.width = window.innerWidth-30+'px';
      // document.getElementsByClassName('inp-button')[0].style.width = window.innerWidth-35+'px';
      // console.log(x[0].style.width)

    }
    document.getElementsByTagName('body')[0].style.padding = 'none';
    if (document.getElementById('root')) {
      let doc = document.getElementById('root')
      doc.style.width = window.innerWidth + 'px';
      console.log(doc.style.width);
      doc.style.height = window.innerHeight + 'px';
    }

  }
  render() {

   
    function onld() {
      
      
    }
    
    return (
      <div >
        <div id="diamond-narrow"></div>
        <div className="loginBox">
          <div className='login-text' >Log in
            <div className="error"><span>Invalid login, please try again</span></div>
          </div>
          <div className="inpt" >
            <label htmlFor="inp">email:</label>
            <input className="inp" width="348px" height="52px"  type="text"
              placeholder="jane@example.com"></input>
          </div>
          <div className="inpt">
            <label htmlFor="inp">password:</label>
            <input className="inp" width="348px" height="52px"  type="text"
              placeholder="********"></input>
          </div>
          <div className="inpt" style={{marginTop:50+'px'}}>
            <input className='inp-button'  type="submit" value="Login" onClick={this.onClik}></input>
          </div>
          <div className="recommand-registering">
            <span>Not yet registered? <a href="/#/SignIn">singIN</a></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login