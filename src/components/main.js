import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Profile from './profile'
import Home from  './home'
import Messages from './messages'
import Login from './Login'
import SignIn from './SignIn'



class Main extends React.Component {
    render() {
        return(
            <main>
                <Router>   
                    <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/login" component={Login}/>
                    </Switch>   
                </Router>
            </main>
        )
    }
}

export default Main 