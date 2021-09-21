import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
export default class sidebar extends Component {
  constructor(props)
  {
    super(props);
    
    ReactSession.setStoreType("localStorage"); 
  }
  componentDidMount(){
    // ReactSession.setStoreType("localStorage");
    
   

      
      }
    render() {
        return (
            <div className="hold-transition sidebar-mini layout-fixed" >
  <aside className="main-sidebar  bg-green sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="#" className="brand-link">
      <img src="admin_styles/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Book Library</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="sidebarlogo2.png" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">{ReactSession.get("name")}</a> 
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          {/* <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> */}
           
        {/* <li className="nav-item"> 
            <a href="" className="nav-link"> <Link to='/dashboard'>
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                
              </p> </Link>
            </a>
          </li>  */}
        { ReactSession.get("roleid")==1?(
        <li className="nav-item">
            <a  className="nav-link">  <Link to='/dashboard'>
              <i className="nav-icon fa fa-tachometer-alt" />
              <p>
                Home 
                {/* <span className="right badge badge-danger">New</span> */}
              </p> </Link>
            </a>
          </li>
           ):""
    }
          { ReactSession.get("roleid")==1?(
          <li className="nav-item">
            <a  className="nav-link">  <Link to='/booksRequest'>
              <i className="nav-icon fas fa-list" />
              <p>
                Books Requests 
                {/* <span className="right badge badge-danger">New</span> */}
              </p> </Link>
            </a>
          </li>
          ):""
    }

          <li className="nav-item">
            <a href="#" className="nav-link">  
              <i className="nav-icon fas fa-copy" />
              <p>
                Manage Books
                <i className="fas fa-angle-left right" />
               
              </p>
            </a>
            <ul className="nav nav-treeview">

            { ReactSession.get("roleid")==1?(
              <li className="nav-item"> <Link to='/addBooks'>
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Books</p>
                </a>  </Link>
              </li>
                ):""
              }
              <li className="nav-item"> <Link  to='/showAllBooks'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Show Available Books</p>
                </a> </Link>
              </li>
              { ReactSession.get("roleid")==1?(
              <li className="nav-item"> <Link  to='/assignedList'>
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Assigned List</p>
                </a> </Link>
              </li>
              ):""
            }
            </ul>
          </li>
          { ReactSession.get("roleid")==1?(
          <li className="nav-item">
            <a href="" className="nav-link">  <Link to='/listUsers'>
              <i className="nav-icon fas fa-user" />
              <p>
                Users 
                {/* <span className="right badge badge-danger">New</span> */}
              </p> </Link>
            </a>
          </li>
           ):""
          }
          <li className="nav-item"> <Link  to='/logout'>
            <a href="pages/widgets.html" className="nav-link"> 
              <i className="nav-icon fas fa-sign-out-alt" />
              <p>
                Logout
                
              </p>
            </a> </Link>
          </li>
        
          
     
         
          
         
          
    
        
     
      
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
