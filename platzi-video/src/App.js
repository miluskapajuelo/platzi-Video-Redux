import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home'
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound from './containers/NotFound';
import Players from './containers/Players';
import Layout from './components/Layout';


function App() {
  return (

      <Router>
        <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route  path="/player/:id" element={<Players/>} /> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Layout>
      </Router>
  );
}

export default App;