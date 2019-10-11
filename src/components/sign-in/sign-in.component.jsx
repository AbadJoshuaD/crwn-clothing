import React from 'react';
import '../sign-in/sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

//Sign in is also created as class component since it needs to keep track of the state of email
//and password
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }
    //handleSubmit is a method triggered when onSubmit event take place in the custom button of sign in
    // it will check at the database if the email & password matches to sign in
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password});
        }catch(error){
            console.error(error);
        }
    }
    //Basically this is just tracker of changes in the input field of the form
    handleChange = event => {
        const {value,name} = event.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label = "Email"
                    required/>

                    <FormInput name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label = "Password"
                    required/>
                    <div className="buttons">
                <CustomButton type="submit" onClick={this.handleSubmit}>Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;