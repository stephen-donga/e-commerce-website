import React from 'react'
import FormInput from '../form-input/FormInput';
import Button from '../button/Button'

import './sign-up.scss'
import {auth, createUserProfileDocument} from '../../firebase/firbase.utils'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayNamme:"",
             email: "",
             password:"",
             confirmPassword:""
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {displayNamme, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Passwords don\'t match')
            return;
        }else{
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayNamme});
    
                this.setState({
                     displayNamme:"",
                     email: "",
                     password:"",
                     confirmPassword:""
                })
            }catch(error){
                console.error(error)
            }
        }
       
    }

    handleChange = (event)=>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    
    render(){
        const {displayNamme, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your  email and password</span>
                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput 
                        type="text"
                        name = "displayNamme"
                        value={displayNamme}
                        handleChange={this.handleChange}
                        label='User Name'
                        required>

                    </FormInput>
                    <FormInput 
                        type="text"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required>

                    </FormInput>
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label=' Password'
                        required>

                    </FormInput>
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm password'
                        required>
                    </FormInput>
                    <Button type='submit'>Sign up</Button>
                </form>
                
            </div>
        )
    }
}

export default SignUp
