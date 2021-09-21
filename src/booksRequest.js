import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { ReactSession } from 'react-client-session';
export default class booksRequest extends Component {
constructor(props) {
    super(props)
      this.state = {
        bookRequests: []
              }
      ReactSession.setStoreType("localStorage");
     const id = ReactSession.get("userid");
     if(!id)
     {window.location.href = '/'; }  }
      componentDidMount(){
        axios.get('http://localhost/BookLibraryBackend/index.php/Books/getBookRequest').then(response => 
        {
           this.setState({bookRequests: response.data});
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
            <h3 className="card-title"><h1>Books Request</h1></h3>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {this.state.bookRequests.map((result) => {
                 return (
                 <tr>
                  <td>{result.name}</td>
                  <td>{result.email}
                  </td>
                  <td>{result.book_name}</td>
                  <td> {result.book_author}</td>
                  <td className="bg-red">{result.status}</td>
                  <td>{result.requested_at}</td>
                  <td>
                  <button onClick={e => {this.approveBookRequest(result.id)}} className="btn btn-success">Approve</button>
                    <button onClick={e => {this.rejectBookRequest(result.id)}} className="btn btn-danger">Reject</button>
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
                  <th></th>
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
  approveBookRequest(id)
    {   
        const fd = new FormData();
        const status = "approved";
        fd.append('id', id);
        fd.append('status', status);
        axios.post('http://localhost/BookLibraryBackend/index.php/Books/approveRequest/'+id, fd
        ).then(response=>
        {
          if(response.data.msg=='success')
          {
            Swal.fire({ title: 'Approved Success!', text: response.data.data, type: 'success',
            });
          }else{
              Swal.fire({title: 'Approve Failed!', text: response.data.data, icon: "Error",
                type:"error", buttons: true, dangerMode: true,
               });
            } 
          axios.get('http://localhost/BookLibraryBackend/index.php/Books/getBookRequest').then(res => 
          {
          this.setState({bookRequests: res.data});
          }); 
         }
        );
    }
  rejectBookRequest(id)
    {
      
        const frmObject = new FormData();
        const status = "reject";
        frmObject.append('id', id);
        frmObject.append('status', status);
        axios.post('http://localhost/BookLibraryBackend/index.php/Books/rejectRequest/'+id, frmObject
        ).then(res=>
        {

          if(res.data.msg=='success')
          {
            Swal.fire({ title: 'Reject Success!', text: res.data.data, type: 'success',
                });
            }else{
              Swal.fire({
                title: 'Approve Failed!',
                text: res.data.data,
                icon: "Error",
                type:"error",
                buttons: true,
                dangerMode: true,
                
              });
            } 
          axios.get('http://localhost/BookLibraryBackend/index.php/Books/getBookRequest').then(res => 
          {this.setState({bookRequests: res.data});
          }); 
          }
        );
    }
  }
