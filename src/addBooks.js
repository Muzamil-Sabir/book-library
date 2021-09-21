import React, { Component } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class addBooks extends Component {
    constructor(props)
    {
      super(props);
      this.addBookSubmit = this.addBookSubmit.bind(this);
      ReactSession.setStoreType("localStorage");
        const id = ReactSession.get("userid");
      if(!id)
      {
        window.location.href = '/';
      }
    }
   state = {
      selectedFile : null
    }
    fileSelect = event => {
      this.setState({selectedFile: event.target.files[0]})
      console.log(event.target.files[0])
    }



   render() {
        return (
            <div>
              <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-md-8">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add New Book</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Book Name</label>
                    <input type="text" className="form-control" id="bookname" ref="bookname" placeholder="Book Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> Description</label>
                    <textarea className="form-control" id="description" ref="description" rows="5" placeholder="Book Description"></textarea>
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Author</label>
                    <input type="text" className="form-control" id="author" ref="author" placeholder="Book Author" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Published on</label>
                    <input type="date" className="form-control" id="published_on" ref="published_on" placeholder="Published on" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image</label>
                    <input required type="file" onChange = {this.fileSelect} className="form-control"  id="bookimg" itemName="bookimg" ref="bookimg"  />
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" onClick={this.addBookSubmit} className="btn btn-primary">Add Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }

    addBookSubmit(frmEvent)
    {
      frmEvent.preventDefault();
      const fd = new FormData();
      fd.append('bookname', this.refs.bookname.value);
      fd.append('description', this.refs.description.value);
      fd.append('author', this.refs.author.value);
      fd.append('published_on', this.refs.published_on.value);
      fd.append('bookimg', this.state.selectedFile, this.state.selectedFile.name);
      
      axios.post('http://localhost/BookLibraryBackend/index.php/Books/addBook', fd
      ).then(res=>
      {
          if(res.data.msg=='success')
          {
            Swal.fire({ title: 'Success', text: res.data.data,type: 'success',
                });
               this.myFormRef.reset();
          }
          else{
              Swal.fire({
                title: 'Login Failed',
                text: res.data.data,
                icon: "Error",
                type:"error",
                buttons: true,
                dangerMode: true,
                
              });
            }
          }
    );
    }
}
