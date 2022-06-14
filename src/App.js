import './App.css';
import Counter from './components/Counter';
import About from './components/About';
import Gallery from './components/Gallery';
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
       <nav className='nabar navbar-expand navbar-brand m-2'>
         <ul className='navbar-nav'>
             <li>
               <Link className='nav-link' to='/home'>Home</Link>
             </li>
             <li>
               <Link className='nav-link' to='/about'>About</Link>
              </li>
             <li>
               <Link className='nav-link' to='/counter'>Counter</Link>
              </li>
             <li>
               <Link className='nav-link' to='/gallery'>Gallery</Link>
             </li>
         </ul>
       </nav>
       <div className='container'>
          <Switch>
            <Route path='/home' ></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/counter' component={Counter}></Route>
            <Route path='/gallery' component={Gallery}></Route>
          </Switch>
       </div>
    </Router>
  );
}

export default App;
