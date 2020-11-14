import React from 'react'
import './sign-in.scss'

import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import { auth, signInWithGoogle } from '../../firebase/firbase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }
    
    
      handleSubmit =async (event) =>{
        event.preventDefault();
        const {email, password} =this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password:""})
        }catch(error){
            console.log(error);
        }
    }

      handleChange = (event) =>{
          const {value, name} = event.target;
          this.setState({[name] : value});
          
    }

    render(){
        const {email, password} =this.state;
        return(
            <div className='sign-in'>
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password</span>
   
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        value={email} 
                        label='Email'
                        handleChange={this.handleChange}
                        /> 
   
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={password} 
                        handleChange={this.handleChange}
                        /> 
                   <div className='buttons'>
                    <Button type='submit'> Sign in  </Button>
                    <Button onClick={signInWithGoogle} isGoogleSign> Sign in with google </Button> 
                   </div>
                </form>
   
            </div>
       )
    }
  
   

}

export default SignIn;