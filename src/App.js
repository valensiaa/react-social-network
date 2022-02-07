import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginPage';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';


const App = ({initializeApp, initialized}) =>  {

  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if(!initialized) return <Preloader/>

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer/>
        <div className='container'>
          <Navbar/>
          
          <SidebarContainer/>
          <div className = 'app-wrapper-content'>
            <Route path='/profile/:userId?' render = {()=> <ProfileContainer/> }/>
            <Route path ='/dialogs' render = {() =><DialogsContainer/>}/>
            <Route path='/news' render = {() => <News/>}/>
            <Route path='/music' render = {() => <Music/>}/>
            <Route path='/settings' render = {() => <Settings/>}/>
            <Route path='/users' render = {() => <UsersContainer/>}/>
            <Route path='/login' render = {() => <LoginPage/>}/>
          </div>
          
        </div>  
      </div>
    </ BrowserRouter>
  );
}

const mapStateToProps =(state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
