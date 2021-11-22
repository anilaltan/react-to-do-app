import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import AllToDo from './components/AllToDo';
import ActiveTodo from './components/ActiveToDo';
import CompToDo from './components/CompToDo';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer';

const App = () => {

  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AllToDo />} />
        <Route path='/active' element={<ActiveTodo />} />
        <Route path='/completed' element={<CompToDo />} />
      </Routes>
      <GlobalStyle/>
      <Footer/>
    </Router>
    );
};

export default App;
