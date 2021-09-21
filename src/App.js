import logo from './logo.svg';
import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Register from './register';
import booksRequest from './booksRequest';
import addBooks from './addBooks';
import showAllBooks from './showAllBooks';
import assignedList from './assignedList';
import listUsers from './listUsers';
import EditBook from './editBook';
import Logout from './logout';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
          
    <div className="">
  
    <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/logout" component={Logout}/>
           <Route exact path="/register" component={Register}/>
          <Route   component={DefaultComponent}/>
          </Switch>
    </div>
  
    </Router>

  );
}


const DefaultComponent = () => (
  <div>
 
 <Sidebar/>
 <Header/>
 
        
        <Switch>
        
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/booksRequest" component={booksRequest}/>
        <Route exact path="/addBooks" component={addBooks}/>
        <Route exact path="/showAllBooks" component={showAllBooks}/>
        <Route exact path="/assignedList" component={assignedList}/>
        <Route exact path="/listUsers" component={listUsers}/>
        <Route exact path="/editBook" component={EditBook}/>
   
            
      </Switch>
      <Footer/>
  
  </div>
)

export default App;
