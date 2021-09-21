import React, { Component } from 'react'
import axios from 'axios';
import { ReactSession } from 'react-client-session';
export default class dashboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        DashboardCardsdData: []  }
        ReactSession.setStoreType("localStorage");
      const id = ReactSession.get("userid");
     if(!id)
     {window.location.href = '/';}}
     componentDidMount(){
        axios.get('http://localhost/BookLibraryBackend/index.php/dashboard').then(res => 
        {this.setState({DashboardCardsdData: res.data});
        }); 
        }
   render() {
        return (
            <div className="hold-transition sidebar-mini layout-fixed">
              <div className="wrapper">
               {this.state.DashboardCardsdData.map((result) => {
             return (
                <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"><h1>Home</h1></h3>
          </div>
          {/* /.card-header */}








      <div className="row">
  <div className="col-md-6 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-info"><i className="far fa-envelope" /></span>
      <div className="info-box-content">
        <span className="info-box-text">{result.total_books}</span>
        <span className="info-box-number">Total Books</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-6 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-success"><i className="far fa-flag" /></span>
      <div className="info-box-content">
        <span className="info-box-text">{result.total_users}</span>
        <span className="info-box-number">Total Users</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-6 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-warning"><i className="far fa-copy" /></span>
      <div className="info-box-content">
        <span className="info-box-text">{result.assigned_books}</span>
        <span className="info-box-number">Assigned Books</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-6 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-danger"><i className="fas fa-arrow-circle-right" /></span>
      <div className="info-box-content">
        <span className="info-box-text">{result.pending_books}</span>
        <span className="info-box-number">Assigned Books</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
</div>








          <div className="row">

  {/* ./col */}

  {/* ./col */}

  {/* ./col */}

  {/* ./col */}
</div>
          {/* /.card-body */}
        </div>
      </div>
    </div>
  </div>
  )
})}
</div>
        </div>

        )
    }
}
