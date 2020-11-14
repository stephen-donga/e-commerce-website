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
        alert('in before')

        // const {displayNamme, email, password, confirmPassword} = this.state;
        if(this.state.password !== this.state.confirmPassword){
            alert('Passwords don\'t match')
            return;
        }
        try{

            const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            await createUserProfileDocument(user,this.state.displayNamme);

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

    handleChange = (e)=>{
        const {value, name} = e.target;
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
                        name="displayName"
                        value={displayNamme}
                        onChange={this.handleChange}
                        label='Display Name'
                        required>

                    </FormInput>
                    <FormInput 
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required>

                    </FormInput>
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label=' Password'
                        required>

                    </FormInput>
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
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
