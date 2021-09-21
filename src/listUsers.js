import React, { Component } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class listUsers extends Component {
constructor(props) {
    super(props)
      this.state = {
        data: []
              }
        ReactSession.setStoreType("localStorage");
     const id = ReactSession.get("userid");
   if(!id)
   { window.location.href = '/'; }  }
   componentDidMount(){
    axios.get('http://localhost/BookLibraryBackend/index.php/user').then(res => 
    {this.setState({data: res.data});
       }); 
       }
 render() {
        return (
            <div>
                    <div className="wrapper">
                 <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"><h1>Users List</h1></h3>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr className="bg-info">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>DateTime</th>
            
                </tr>
              </thead>
              <tbody>
              {this.state.data.map((result) => {
             return (
               <tr>
               <td>{result.name}</td>
               <td>{result.email}</td>
               <td>{result.password}</td>
               <td>{result.address}</td>
               <td>{result.phone}</td>
               <td>{result.datetime}</td>
               </tr>
              )
            })}
              </tbody>
              <tfoot>
              <tr className="bg-info">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>DateTime</th>
                  
                </tr>
              </tfoot>
            </table>
          </div>
          {/* /.card-body */}
        </div>
      </div>
    </div>
  </div>
  </div>
            </div>
        )
    }
}
