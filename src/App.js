import React from 'react';
import './App.css';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import Chats from './components/Chats/Chats';

// context api
import { useStateValue } from './state/Provider'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./state/AuthContext"

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login}/>
            
          </Switch>
        </AuthProvider>
      </Router>
      {/* { 
        !user ? <Login />
        : (
          <>
            <Header />  
            <div className="appBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )
      } */}
    </div>
  );
}

export default App;
