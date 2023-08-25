import React from 'react';

import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export function login() {

	return(
		

<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-group mb-0">
          <div class="card p-4">
            <div class="card-body">
              <h1>Login</h1>
              <p class="text-muted">Sign In to your account</p>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="fa fa-user" id="user-icon"></i></span>
                <input type="text" class="form-control" placeholder="Username"/>
              </div>
              <div class="input-group mb-4">
                <span class="input-group-addon"><i class="fa fa-lock" id="lock-icon"></i></span>
                <input type="password" class="form-control" placeholder="Password"/>
              </div>
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-primary px-4">Login</button>
                </div>
                <div class="col-6 text-right">
                  <button type="button" class="btn btn-link px-0">Forgot password?</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-white  py-5 d-md-down-none" id="card1" style="width:44%">
            <div class="card-body text-center">
              <div>
                <h2>Sign up</h2>
                <p>Create memories, make friends, and explore together.</p>
                <button type="button" class="btn btn-primary active mt-3">Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
		  );
		}
		
		
		
			
		




export default login; // Export the component


		
