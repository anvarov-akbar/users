
import React from 'react'
import useToken from '../../Hooks/useToken';

const UnauthenticatedApp = () =>{
    const [setIsLoggedIn] = useToken(true);
    const handleSubmit = async (evt) =>{
        evt.preventDefault();

        const{email, password} = evt.target.elements;

        const res = await fetch("https://reqres.in/api/login",{
 
        method:'POST',
        headers:{'content-type':'application/json',},
         body:JSON.stringify({
             email:email.value.trim(),
             password:password.value.trim(),
         }),
        });

        const data = await res.json();

        if (data?.token) {
            setIsLoggedIn(data?.token);
        }

    };
    return(
        <form  className='form' onSubmit={handleSubmit}>
      <input className='email__input' type='email' placeholder='email' name='email' defaultValue={"eve.holt@reqres.in"} />
      <input className='password__input'
        placeholder='password'
        type='password'name='password'
      />


      <button className='btn__submit' type='submit'>submit</button>
      
    </form>
    );
};


export default UnauthenticatedApp;