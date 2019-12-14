import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Firebase from './components/Firebase/firebase'

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
)

