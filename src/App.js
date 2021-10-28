import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
//import Sidebar from './components/Sidebar/Sidebar';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) =>  {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <div className='container'>
          <Navbar/>
          
          {/* <Sidebar state={props.state.sidebar.friendsSidebar}/> */}
          <div className = 'app-wrapper-content'>
            <Route path='/profile' render = {()=> <Profile/> }/>
            <Route path ='/dialogs' render = {() =><DialogsContainer/>}/>
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
