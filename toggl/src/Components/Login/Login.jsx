 
   import React , { useState } from 'react'
   import loginstyles from '../CSS/Login.module.css'
   import   {auth, google} from '../firebase'
   function Login(){
   
     
     const [password, setPassword] = useState("null");
     const [email, setEmail] = useState("null");
      
     const logingoogle = ()=>{
       auth.signInWithPopup(google)
       .then(resp => console.log(resp))
       .catch((err) => console.log(err));
     }
   
     async function  Register()
     {
       auth.createUserWithEmailAndPassword(email, password)

         .then(function (response) {
           console.log(response.user);
         })
         .catch(function (error) {
           console.log(error);
         })  
     }

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
    
    <div className={loginstyles.container}  >
                 <img width="100%" height="450px"      src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg" alt="laptop"  />
                 
                 <div className={loginstyles.centered}>
                 <h1 >Log in to your account</h1> 
                 <h3 className={loginstyles.h3}>Let's get Tracking!</h3>
                   </div>
               </div>
   
   
   
       
        <div>
         
      </div>
            
       <div className={loginstyles.main}>
           
         <form>
   
         <button className={loginstyles.google}  onClick={logingoogle}> <img className={loginstyles.googleimg} src="https://img.icons8.com/color/452/google-logo.png" alt="google"/>Signup via Google</button>
                  <button className={loginstyles.google}> <img className={loginstyles.googleimg} src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"/> Sign up via Apple</button>
   
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
   
                  <button onClick={Register}>Log in</button>
             </div>
          </form>
    </div>
   
   
           </div>
       )
   }
   
   export {Login}