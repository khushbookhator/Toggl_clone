import React , { useState } from 'react'
import loginstyles from '../CSS/Login.module.css'
import auth from '../firebase'
function Login(){

  
  const [password, setPassword] = useState("null");
  const [email, setEmail] = useState("null");
   

 function Log(){
    {
       

        auth.createUserWithEmailAndPassword(email, password)

          .then(function (response) {
            console.log(response.user);
          })
          .catch(function (error) {
            console.log(error);
          })
      }
 }

    return(
        
        <div className={loginstyles.body}>
    <div className={loginstyles.h1}>
     <h1 >Log in to your account</h1> 
     </div>
     <div>
     <h3 className={loginstyles.h3}>Let's get Tracking</h3>
   </div>
         
    <div className={loginstyles.main}>
        
      <form>
          <div>
          <label>Email </label><br/>
        <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/> 
         </div>
 
          <div>
              <label>Password</label><br/>
              <input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          </div>
           <div style={{textAlign:"right", paddingTop:"50px", marginRight:"50px"}}>
                <span>Forgot Password?</span>
           </div>
          <div>

               <button onClick={Log}>Log in</button>
          </div>
       </form>
 </div>


        </div>
    )
}

export {Login}