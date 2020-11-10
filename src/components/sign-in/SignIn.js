import React,{useState} from 'react'

import './sign-in.scss'

import FormInput from '../form-input/FormInput'
import Button from '../button/Button'

const SignIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    const handleEmailChange = (e) =>{
         setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
   }
   const handleSubmit = (e) =>{
    e.preventDefault();
    setEmail('');
    setPassword('')
   }
    return(
         <div className='sign-in'>
             <h2>Already have an account ?</h2>
             <span>Sign in with your email and password</span>

             <form onSubmit={()=>handleSubmit}>
                 <FormInput 
                 name='email' 
                 type='email'
                 value={email} 
                 label='Email'
                 handleChange={handleEmailChange}
                 /> 

                 <FormInput 
                 name='password' 
                 type='password' 
                 label='Password'
                 value={password} 
                 handleChange={handlePasswordChange}
                  /> 
                
                 <Button type='submit'> Sign in  </Button> 
             </form>

         </div>
    )

}

export default SignIn;