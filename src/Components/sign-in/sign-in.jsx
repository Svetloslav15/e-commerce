import React, {Component} from 'react';
import './sign-in.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.setState({email: '', password: ''})
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" onChange={this.handleChange}
                               value={this.state.email} required/>
                    <FormInput name="password" label="Password" type="password" onChange={this.handleChange}
                               value={this.state.password} required/>

                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;