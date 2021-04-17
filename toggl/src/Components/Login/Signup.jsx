import React, { useState } from 'react'
import signstyles from './Signup.module.css'
import   {auth ,google}from './firebase'
 
function Signup(){

     
    const [password, setPassword] = useState("null");
    const [email, setEmail] = useState("null");
    const [isHidden, setisHiddden] = useState(false);

   
  {/* function googlesignup(){
     
auth.signInWithPopup(google)
.then( resp =>
  {
    return console.log(resp.email.displayEmail),
    setEmail(resp.user.displayEmail),
    setPassword(resp.user.password)
  }
)
.catch((err)=> console.log(err))
}
auth.auth().signInWithRedirect(google);
*/}
{/*
auth.auth()
  .getRedirectResult()
  .then((result) => {
  if (result.credential) {*/}
    //  /** @type {firebase.auth.OAuthCredential} */
     // var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
     // var token = credential.accessToken;
      // ...
   // } 
    // The signed-in user info.
   // var user = result.user;
  //}).catch((error) => {
    // Handle Errors here.
   // var errorCode = error.code;
    //var errorMessage = error.message;
    // The email of the user's account used.
    //var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    //var credential = error.credential;
    // ...
  //}); 


   

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
     
    return(       
         <div className={signstyles.signstyles} signstyles={{width:"100%", margin:"0", padding:"0"}}>
             <div className={signstyles.container}  >
              <img width="100%" height="450px"      src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg" alt="laptop"  />
              
              <div className={signstyles.centered}>
              <span>   Sign Up for your  <em>Free</em>  Toggl track Account  </span>
                </div>
            </div>
            <div className={signstyles.bodylog}> 
             <div className={signstyles.main}>
             <form>
               <button className={signstyles.google}  > <img className={signstyles.googleimg} src="https://img.icons8.com/color/452/google-logo.png" alt="google"/>Signup via Google</button>
               <button className={signstyles.google}> <img className={signstyles.googleimg} src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"/> Sign up via Apple</button>
            <div>
            <input      type="checkbox" id="terms"  name="terms" value="terms" />
            <label for="terms">I agree to the terms of service and privacy policy.</label>
            </div>
          
            <button className={signstyles.btn3log}  type="button" onClick={()=>setisHiddden(!isHidden)}> <img className={signstyles.googleimg} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" alt="email"/>Sign up via Email</button>
            <div id="hideDiv" className={isHidden?signstyles.hidden:""}> 
         <div>
          <label>Email </label><br/>
        <input className={signstyles.input1log} type="text" placeholder="Email"  onChange={(e)=> setEmail(e.target.value)}/> 
         </div>
 
          <div>
              <label>Password</label><br/>
              <input className={signstyles.input1log} type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
          </div>
           <div style={{textAlign:"right", paddingTop:"50px", marginRight:"50px"}}>
                <span>Forgot Password?</span>
           </div>
           <button className={signstyles.btn2log} type="button" onClick={Register}>Signup</button>
           </div>
       </form>

       </div>
          <label style={{color:"white"}} >Have an Account already?</label><br/>
          <button className={signstyles.btnlog}>Login</button>
        </div>
       



         
        </div>
    )
}

export {Signup}