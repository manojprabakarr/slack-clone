import React from 'react';
import Login from './components/login'
import './App.css'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Chat from './components/chat'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
  
import {Usestatevalue} from './StateProvider'


function App() {
  const[{user}]=Usestatevalue()
  return (
    <div className="app">
       <Router>
        {user ? (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
        
      </Router>
  
    
    </div>
  );
}

export default App;
