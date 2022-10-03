import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
// component file
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";

const root = ReactDOM.createRoot( document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<TodoContainer />}/>
          <Route path="/about/*"  element={<About />} />
          <Route path='*' element={<NotMatch />} />
        </Routes>
    </Router>
     </React.StrictMode>)