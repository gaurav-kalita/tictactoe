import React from 'react';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';

import Board from './components/Board/Board';
import Players from './components/Board/Players';
import Result from './components/Board/Result/Result'
import InputForm from './components/home_screen/InputForm'


const PageOne = () =>{
    return(
        <div className="container">
            <InputForm/>
        </div>
    )
}


const PageTwo = () =>{
    return(
    <div>
        <Players/>
            <div id="board" className="row">
                <div className="col-md-4 col-lg-4 offset-md-4 offset-lg-4 ">
                <Board />
                <Result/>
                </div>
            </div>
    </div> 
    )
}




function App() {
    return(
        <div className="container">
        <BrowserRouter>
           <Route path="/" exact component ={PageOne}/>
           <Route path="/Game" component ={PageTwo} /> 
        </BrowserRouter>   
        </div>
    );
}

export default App;