import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ReactSession } from 'react-client-session';
export default class login extends Component {
    constructor(props)
    { super(props);
      this.submitLoginForm = this.submitLoginForm.bind(this);
      ReactSession.setStoreType("localStorage"); 
    }render(){
        return (
            <div className="hold-transition login-page">
 <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="/" className="h1"><b>BOOK &nbsp;</b>LIBRARY</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form ref={(el) => this.myFormRef = el}>
        <div className="input-group mb-3">
          <input id="username" ref="username"  type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" id="password" ref="password"  className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
           </div>
        </div>
      <div className="social-auth-links text-center mt-2 mb-3">
        <button onClick={this.submitLoginForm} type="submit" className="btn btn-block btn-primary">
          Sign in 
       </button> <hr/>
    <Link to="/register"> 
       <button type="submit" className="btn btn-block btn-info">
         Register 
       </button> </Link> 
      </div>
      </form>
    </div>
  </div>
</div>

</div>
        )
    }
   submitLoginForm(frmEvent)
    { frmEvent.preventDefault();
      const frmObj = new FormData();
      frmObj.append('username', this.refs.username.value);
      frmObj.append('password', this.refs.password.value);
     axios.post('http://localhost/BookLibraryBackend/index.php/user/login', frmObj
      ).then(response=>
      {if(response.data.msg=='success')
        {
     
           ReactSession.set("userid", response.data.result[0].user_id);
          ReactSession.set("roleid", response.data.result[0].role);
          ReactSession.set("name", response.data.result[0].name);
          ReactSession.set("email", response.data.result[0].email);
          if(response.data.result[0].role==1)
          { 
            window.location.href='/dashboard';
          }
          else{ 
            window.location.href='/showAllBooks';
          }
          this.myFormRef.reset();
        }else{
          Swal.fire({ title: 'Login Failed', text: response.data.result,icon: "Error", type:"error", buttons: true,dangerMode: true,
           });
        }
   
    }
    );
    }
}
