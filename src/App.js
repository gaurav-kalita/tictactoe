import React from 'react';
import "./App.css";

import Board from './components/Board/Board';


function App() {
    return(
        <div className="container">
            <div id="board" className="row">
                <div className="col-md-4 col-lg-4 offset-md-4 offset-lg-4 ">
                <Board />
                </div>
            </div>    
        </div>
    );
}

export default App;