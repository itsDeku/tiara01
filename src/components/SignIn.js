import React from 'react'
import axios from 'axios'

let coverscr = [
  'https://images.freeimages.com/images/large-previews/2b6/free-banner-background-1639360.jpg',
  
]


class SignIn extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      email : "",
      password : "555555",
    }

    this.onClik = this.onClik.bind(this)
    
 
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
    var _name = document.getElementsByClassName('inp')[0].value;
    var _email = document.getElementsByClassName('inp')[1].value;
    var _password = document.getElementsByClassName('inp')[2].value;
    var _passwordRecheck = document.getElementsByClassName('inp')[3].value;
    var _error = document.getElementsByClassName('error')[0];
    if(_password !== _passwordRecheck){
      _error.style = 'display:block'
      _error.innerHTML = "password does not match"
      }
    else{
      axios.post('https://tiaraapi.herokuapp.com/signin/'+_name+'/'+_email+'/'+_password)
      .then((response) => {
        if(response.status===200){
          console.log(response)
          sessionStorage.setItem("token", JSON.stringify(response.data))
          window.location = '/#/profile'
        }
       
      })

      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .then(function () {
       

      });
    

    }
 
   
    
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

   
    
    
    return (
      <div>
        <div id="diamond-narrow"></div>
        <form action=''class="loginBox">
          <div class='login-text' >Sign In
            <div className="error"><span>Invalid login, please try again</span></div>
          </div>
          <div class="inpt" >
            <label for="inp">Username:</label>
            <input class="inp" width="348px" height="52px"  type="text"
              placeholder="john"></input>
          </div>
          <div class="inpt">
            <label for="inp">Email:</label>
            <input class="inp" width="348px" height="52px"  type="text"
              placeholder="jane@example.com"></input>
          </div>
          <div class="inpt">
            <label for="inp">Password:</label>
            <input class="inp" width="348px" height="52px"  type="password"
              placeholder="********"></input>
          </div>
          <div class="inpt">
            <label for="inp">Enter Password again:</label>
            <input class="inp" width="348px" height="52px"  type="password"
              placeholder="********"></input>
          </div>
          <div class="inpt" style={{marginTop:50+'px'}}>
            <input class='inp-button'  type="button" value="Creat account" onClick={this.onClik}></input>
          </div>
          <div class="recommand-registering">
            <span>Already registered? <a href="/#/login">LogIN</a></span>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn