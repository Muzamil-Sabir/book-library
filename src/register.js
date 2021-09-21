import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
export default class register extends Component {
  constructor(props)
    {super(props);
    this.registerForm = this.registerForm.bind(this); }
 render() {
        return (
            <div className="hold-transition login-page">
            <div className="login-box">
             {/* /.login-logo */}
             <div className="card card-outline card-primary">
               <div className="card-header text-center">
                 <a href="/" className="h1"><b>BOOK &nbsp;</b>LIBRARY</a>
               </div>
               <div className="card-body">
                 <p className="login-box-msg">Register yourself</p>
                 <form ref={(el) => this.myFormRef = el}>

                 <div className="input-group mb-3">
                     <input required type="text" id="name" ref="name"  className="form-control" placeholder="Name" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-user" />
                       </div>
                     </div>
                   </div>


                   <div className="input-group mb-3">
                     <input required type="email" id="username" ref="username"  className="form-control" placeholder="Email" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-envelope" />
                       </div>
                     </div>
                   </div>
                   <div className="input-group mb-3">
                     <input required type="password" id="password" ref="password"  className="form-control" placeholder="Password" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-lock" />
                       </div>
                     </div>
                   </div>

                   <div className="input-group mb-3">
                       <textarea required id="address" ref="address"   className="form-control" placeholder="Address" ></textarea>
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-address-card"/>
                       </div>
                     </div>
                   </div>

                   <div className="input-group mb-3">
                     <input required type="text" id="phone" ref="phone"  className="form-control" placeholder="Phone#" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-phone" />
                       </div>
                     </div>
                   </div>
                 
                 <div className="social-auth-links text-center mt-2 mb-3">
                   <button onClick={this.registerForm} type="submit" className="btn btn-block btn-primary">
                     Register 
                  </button> <hr/>
               <Link to="/"> 
                  <button type="submit" className="btn btn-block btn-info">
                    Sigin In 
                  </button> </Link> 
                 </div>
             
                 </form>
               </div>
             </div>
           </div>
           
           </div>
        )
    }

    registerForm(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('name', this.refs.name.value);
      fd.append('username', this.refs.username.value);
      fd.append('password', this.refs.password.value);
      fd.append('address', this.refs.address.value);
      fd.append('phone', this.refs.phone.value);
      axios.post('http://localhost/BookLibraryBackend/index.php/user/signup', fd
      ).then(response=>
      {  if(response.data.msg=='success')
        { Swal.fire({ title: 'Registration Success', text: response.data.data, type: 'success',
              });
           window.location.href='/';
         this.myFormRef.reset();}
        else{ Swal.fire({title: 'Registration Failed', text: response.data.data,icon: "Error",
            type:"error", buttons: true,dangerMode: true,
           });
        }
      }
    );
    }
}
