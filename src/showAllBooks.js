import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class showAllBooks extends Component {

  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
          
     ReactSession.setStoreType("localStorage");
      const id = ReactSession.get("userid");
   if(!id)
   {
     window.location.href = '/';
   }          
      }
   componentDidMount(){
        axios.get('http://localhost/BookLibraryBackend/index.php/Books').then(res => 
        {
        this.setState({data: res.data});
        }); 
        }
       

    render() {
        return (
        <div className="hold-transition sidebar-mini">
          <div className="wrapper">
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Books</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Books</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Books</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
               
                <div className="row mt-4">
                {this.state.data.map((result) => {
                 return (
                  <div className="col-sm-4">
                    <div className="position-relative">
                    <img style={{height:'300px'}} className="img-fluid"  src={`http://localhost/BookLibraryBackend/Book_images/${result.image}`}></img>
                      <div className="ribbon-wrapper ribbon-lg">
                        {/* <div className="ribbon bg-success text-lg">
                          Ribbon
                        </div> */}
                      </div> <br></br>
                     <b> Book Name: </b> {result.book_name}  <br/>
                     <b> Author: </b> {result.book_author} <br/>
                    <b>  Published on:</b> {result.published_on} <br/>
                    { ReactSession.get("roleid")==1?(
                    <button className="btn btn-primary"><Link style={{ color: 'white' }} to={{
                    pathname: "/editBook",
                    state: {book_id:result.book_id} // your data array of objects
                  }} >Edit</Link></button>
                  ):""
                } &nbsp;
                     { ReactSession.get("roleid")==1?(
                    <button onClick={e => {this.deleteItem(result.book_id)}} className="btn btn-danger">Delete</button>
                    ):""
                  }

&nbsp;
                     { ReactSession.get("roleid")==2?(
                    <button onClick={e => {this.requestBook(result.book_id)}} className="btn btn-success">Request Book</button>
                    ):""
                  }
                    <div className="row">&nbsp; </div>
                    </div>
                  </div>    
                  
                   )
                  })}
                </div>

              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>  
  </div>
  </div>



        )
    }

    deleteItem(book_id)
    {
      const fd = new FormData();
       
        axios.post('http://localhost/BookLibraryBackend/index.php/Books/delete/'+book_id, fd
        ).then(res=>
        {
           axios.get('http://localhost/BookLibraryBackend/index.php/Books').then(res => 
          {
          this.setState({data: res.data});
          }); 
          Swal.fire({
            title: 'Book has been deleted.',
            text: res.data.data,
            type: 'success',
            
          });
        
        }
        );
    }
 requestBook(book_id)
    {
      const fd = new FormData();
      const userid = ReactSession.get("userid");
        fd.append('book_id', book_id);
        fd.append('userid', userid);
        axios.post('http://localhost/BookLibraryBackend/index.php/Books/requestBook/'+book_id+"/"+userid, fd
        ).then(res=>
        {
      if(res.data.msg=='success')
          {
            Swal.fire({title: 'Request Success!', text: res.data.data, type: 'success',
                });
          }else{
              Swal.fire({
                title: 'Request Failed!',
                text: res.data.data,
                icon: "Error",
                type:"error",
                buttons: true,
                dangerMode: true,
                
              });
            } 
          axios.get('http://localhost/BookLibraryBackend/index.php/Books').then(res => 
          {
          this.setState({data: res.data});
          }); 
           }
        );
    }


}
