import React, { Component } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
export default class editBook extends Component {


    constructor(props) {
        
        super(props)
        this.addFormData = this.addFormData.bind(this);
          this.state = {
            data: []
                  }
          
          }
        componentDidMount(){
            const book_id = this.props.location.state.book_id;
           
            axios.get('http://localhost/BookLibraryBackend/index.php/Books/getBooks/'+book_id).then(res => 
            {
            
             this.setState({data: res.data});
           
               }); 
            }
          addFormData(evt)
            {
              evt.preventDefault();
              const fd = new FormData();
            const book_id= this.refs.book_id.value;
              fd.append('bookname', this.refs.bookname.value);
                fd.append('description', this.refs.description.value);
                fd.append('author', this.refs.author.value);
                
              
              axios.post('http://localhost/BookLibraryBackend/index.php/Books/updateBook/'+book_id, fd
              ).then(res=>
              {

                if(res.data.msg=='success')
                {
                
                    Swal.fire({
                        title: 'Updation Success!',
                        text: res.data.result,
                        type: 'success',
                        
                      });
                  
                }else{
                    Swal.fire({
                      title: 'Updation Failed!',
                      text: res.data.result,
                      icon: "Error",
                      type:"error",
                      buttons: true,
                      dangerMode: true,
                      
                    });
                  }
            axios.get('http://localhost/BookLibraryBackend/index.php/Books/getBooks/'+book_id).then(res => 
            {
            this.setState({data: res.data});
            });
            }
            );
            }




    render() {
        return (
            <div>
                 {this.state.data.map((result) => {
                 return (
            <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-md-8">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Update Book</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form ref={(el) => this.myFormRef = el}  enctype="multipart/form-data">
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Book#</label>
                  <input disabled defaultValue={result.book_id} type="text" className="form-control" id="book_id" ref="book_id" placeholder="Book Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Book Name</label>
                  <input defaultValue={result.book_name} type="text" className="form-control" id="bookname" ref="bookname" placeholder="Book Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1"> Description</label>
                  <textarea defaultValue={result.description} className="form-control" id="description" ref="description" rows="5" placeholder="Book Description"></textarea>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Author</label>
                  <input defaultValue={result.book_author} type="text" className="form-control" id="author" ref="author" placeholder="Book Author" />
                </div>
                
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" onClick={this.addFormData} className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 )
})}
          </div>
        )
    }
}
