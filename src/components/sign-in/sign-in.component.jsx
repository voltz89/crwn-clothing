import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {name,value} = event.target;
        console.log(event.target)
        this.setState({[name]: [value]}) // This is so confusing
        console.log("State: ",this.state)
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                {/*<form onSubmit={this.handleSubmit}>
                    <Input 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    
                    <Input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        label="password"
                        required
                    /> 
                */}
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required
                    />
                    
                    
                    {/*<input type="submit" value="Submit Form"/>*/}
                    <div className= 'buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                    
                </form>

            </div>

        )
    }
}
export default SignIn;