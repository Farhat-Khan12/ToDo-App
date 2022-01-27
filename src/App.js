import logo from './logo.svg';
import './App.css';
import React, { Component,Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Loginform from './components/Loginform';
// import Registrationform from './components/Registrationform';
// import TodoList from './components/TodoList';
//import Logout from './components/Logout';
const Home = React.lazy(() => import('./components/Home'));
const Loginform = React.lazy(() => import('./components/Loginform'));
const TodoList = React.lazy(() => import('./components/TodoList'));
const Registrationform = React.lazy(() => import('./components/Registrationform'));
const Logout = React.lazy(()=>import('./components/Logout'));

function App() {
  return (
   <main>
     <BrowserRouter>
     <Suspense fallback={<h1>Loading...</h1>}>
     <Switch>
     <Route path="/" component={Home} exact />
      <Route path="/regestration" component={Registrationform} />
      <Route path="/login" component={Loginform} />
      <Route from="/todo" to="/login" component={TodoList}/>
      <Route path="/logout" component={Logout}/>
      <Route component={Error} />
     </Switch>
     </Suspense>
     </BrowserRouter>
   </main>
  );
}

export default App;
