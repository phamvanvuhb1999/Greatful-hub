import './App.css';
import AppIcon from './components/logo.js';
import NavBar from './components/navbar/NavBar';
import Main from './components/main/Main';
import Login from './connects/auth/LoginForm';

function App({auth}) {
  return (
    <div className="App">
      {(!auth || !auth.token) && <Login />}   
      {(auth && auth.token) && (<div><NavBar/><Main auth={auth}/></div>)}   
    </div>
  );
}
export default App;
