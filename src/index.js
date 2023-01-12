import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App'
import './index.css'
import Success from "./pages/Success/Success";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    </Router>
)