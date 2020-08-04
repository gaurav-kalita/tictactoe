import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';


class InputForm extends React.Component{
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                <div className="header">{error}</div>
                </div>
            )
        }
    }
        
    renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
    <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
    </div>
    
);
};

    
    //what form should do on form submit
    onSubmit=(formValues)=>{
    }

    render(){
        return(
            
            <form
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="form container mt-5" 
            >
                <h1>WELCOME TO TICTACTOE</h1>
                <Field name="player1" component={this.renderInput} label="enter player1 name: "/>
                <Field name="player2" component = {this.renderInput} label="enter player2 name: "/>
                <Link to= "./game"> <button className="btn-success">PLAY</button> </Link>
      
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.player1){
        errors.player1 = "You must enter name for player1";
    }

    if(!formValues.player2){
        errors.player2 = "You must enter name for player2";
    }

    return errors;
}




export default reduxForm({
    form:'InputForm',
    validate: validate,
    destroyOnUnmount: false,
   
})(InputForm);