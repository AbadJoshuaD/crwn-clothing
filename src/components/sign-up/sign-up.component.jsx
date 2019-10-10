import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import '../sign-up/sign-up.styles.scss'

//Sign up component is set to be a class component since it requires to track the state of the Form.
class SignUp extends React.Component{
    constructor(){
        super();
        //This is the state object of the form;
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    //This method will be triggered upon onSubmit in Custom Button Sign Up creating a profile document of new user
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }catch(error){
            console.error(error);
        }
    }
    //Basically this is just tracker of changes in the input field of the form
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});

    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                //This is sign in form wherein we are tapped to the value to dynamically change the state of the form inputs
                //Also we are tap in to the onChange that will fire an handleChange event
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required></FormInput>
                    <FormInput type="email" name='email' value={email} onChange={this.handleChange} label='Email' required></FormInput>
                    <FormInput type="password" name='password' value={password} onChange={this.handleChange} label='Password' required></FormInput>
                    <FormInput type="password" name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required></FormInput>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;