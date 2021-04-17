import React , { useRef, useState } from 'react'
import loginstyles from './Login.module.css'
import   {auth, google} from './firebase'
import { useHistory } from 'react-router'
function Login(){
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
    const history  = useHistory()
 
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
       emailRef.current.value,
       passwordRef.current.value 
    ).then((authUser)=>{
        if(authUser){
          history.push("/timer")
        }
    }).catch((error)=>{
        alert(error.message)
    })
  }
  
    return(
        
        <div className={loginstyles.body}>
 
 <div className={loginstyles.container}  >
              <img width="100%" height="450px"      src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg" alt="laptop"  />
              
              <div className={loginstyles.centered}>
              <h2 className={loginstyles.h2log} >Log in to your account</h2> 
              <h3 className={loginstyles.h3log}>Let's get Tracking!</h3>
                </div>
            </div>
     <div>
      
   </div>
         
    <div className={loginstyles.main}>
        
      <form>

      <button className={loginstyles.google}  > <img className={loginstyles.googleimg} src="https://img.icons8.com/color/452/google-logo.png" alt="google"/>Signup via Google</button>
               <button className={loginstyles.google}> <img className={loginstyles.googleimg} src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"/> Sign up via Apple</button>

          <div>
          <label>Email </label><br/>
        <input className={loginstyles.input1log} type="text" placeholder="Email" ref={emailRef}/> 
         </div>
 
          <div>
              <label>Password</label><br/>
              <input className={loginstyles.input1log} type="text" placeholder="Password" ref = {passwordRef}/>
          </div>
           <div style={{textAlign:"right", paddingTop:"50px", marginRight:"50px"}}>
                <span>Forgot Password?</span>
           </div>
          <div>

               <button className={loginstyles.btn2log} onClick={signIn}>Log in</button>
          </div>
       </form>
 </div>


        </div>
    )
}

export {Login}