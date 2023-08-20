import React from 'react';

import './login.css'

export function login() {

	return(

		

		<div className="page">
 
		<div className="row">
		  
		
		  <div className="col-sm-8 text-center signin">
		
		
		   
			<form action="">
	  
			  <p className="h4 mb-4 text-center signintext top"><strong>Sign in to this Website</strong></p>
		
		
		<div className="social-btn text-center">
			  <a href="#" className="btn btn-primary btn-lg" title="Facebook"><i className="fa fa-facebook"></i></a>
			  <a href="#" className="btn btn-info btn-lg" title="Twitter"><i className="fa fa-twitter"></i></a>
			  <a href="#" className="btn btn-danger btn-lg" title="Pinterest"><i className="fa fa-pinterest"></i></a>
			</div>
		
			  <p className="text-center signintext">Or use your Email account</p>
		
		 
			  <input type="email" className="form-control mb-4"  placeholder="&#xf0e0; Email" style="font-family:Arial, FontAwesome" />
		
			
			  <input type="password" className="form-control mb-4" placeholder="&#xf023;  Password" style="font-family:Arial, FontAwesome" />
		
			 
		
					<a className="ForgotPassBtn" href="" >Forgot Your Password?</a>
			  <button className="btn btn-info btn-block LoginBtn" type="submit" >SIGN IN</button>
		
		
			</form>
		
		  </div>
		
		
		  <div className="col-sm-4 signup text-center">
			<h2 className="HelloFriend">Hello, Friend!</h2>
			<h4 className="SignupText">Enter your personal details<br/>and start journey with us</h4>
			<button className="btn btn-info btn-block signupbtn" type="submit">SIGN UP</button>
		
		  </div>
		</div>
		</div>
		  );
		}
		
		
		
			
		




export default login; // Export the component


		
