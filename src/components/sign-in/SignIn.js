import React from 'react'
import './sign-in.scss'

import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import { signInWithGoogle } from '../../firebase/firbase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:" ",
             password:" "
        }
    }
    
    
      handleSubmit = (e) =>{
        e.preventDefault();
       this.setState({email:" ",password:" "})
    }

      handleChange = (e) =>{
          const {value, name} = e.target;
          this.setState({[name] : value});
          
    }

    render(){
        const {handleChange} = this.handleChange;
        const {handleSubmit} = this.handleSubmit;
        const {email, password} =this.state;
        return(
            <div className='sign-in'>
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password</span>
   
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email'
                    value={email} 
                    label='Email'
                    handleChange={handleChange}
                    /> 
   
                    <FormInput 
                    name='password' 
                    type='password' 
                    label='Password'
                    value={password} 
                    handleChange={handleChange}
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