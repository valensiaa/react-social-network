import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state from './redux/state';


const App = (props) =>  {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <div className='container'>
          <Navbar/>
          
          <Sidebar state={state.friendsSidebar}/>
          <div className = 'app-wrapper-content'>
            <Route path='/profile' render = {()=> 
            <Profile 
                    profilePage={props.state.profilePage} 
                    addPost = {props.addPost} 
                    updateNewPostText={props.updateNewPostText}/>
            }/>
            <Route path ='/dialogs' render = {() => <Dialogs state={state.dialogsPage}/>}/>
            <Route path='/news' render = {() => <News/>}/>
            <Route path='/music' render = {() => <Music/>}/>
            <Route path='/settings' render = {() => <Settings/>}/>
          </div>
          
        </div>  
      </div>
    </ BrowserRouter>
  );
}

export default App;
