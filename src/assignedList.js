import React, { Component } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class assignedList extends Component {
constructor(props) {
    super(props)
      this.state = {
        data: []
              }
     ReactSession.setStoreType("localStorage");
     const id = ReactSession.get("userid");
   if(!id)
   {window.location.href = '/'; }  }
      componentDidMount(){
        axios.get('http://localhost/BookLibraryBackend/index.php/Books/assignedList').then(res => 
        { this.setState({data: res.data});
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
        <h3 className="card-title"><h1>Assigned List</h1></h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <table id="example1" className="table table-bordered table-striped">
          <thead>
            <tr className="bg-green">
              <th>Name</th>
              <th>Email</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Status</th>
              <th>Requested at</th>
              <th>Assigned at</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
             return (
             <tr>
              <td>{result.name}</td>
              <td>{result.email}
              </td>
              <td>{result.book_name}</td>
              <td> {result.book_author}</td>
              <td className="bg-green">{result.status}</td>
              <td>{result.requested_at}</td>
              <td>
               {result.assigned_at}
              </td>
              </tr>
              )
            })}
          </tbody>
          <tfoot>
          <tr className="bg-green">
              <th>Name</th>
              <th>Email</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Status</th>
              <th>Requested at</th>
              <th>Assigned at</th>
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
