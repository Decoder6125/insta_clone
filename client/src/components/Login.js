import React from 'react'
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div>
          
             <div className="card">
                 <div className="logo">Instagram</div>
                 <input type="text" placeholder="Email" type="email" />
                 <input type="password" placeholder="Password" type="Password" />
                 <input type="submit" value="Login" />
                 <br></br>
                 
                 <div className="signin_red">Don't have an account? 
                 
                 
                 <Link to="/Signup">Signup</Link>
                 
                 
                 
                 
               </div>



                 </div>  
               
                  
               
               
               
              
        </div>
    )
}

export default Login
