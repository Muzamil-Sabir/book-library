import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';
export default class logout extends Component {


    constructor(props) {
        super(props)
          
              
         ReactSession.setStoreType("localStorage");
         localStorage.clear();
         window.location.href='/';
                  
          }
 
    render() {
        return (
            <div  className="wrapper">
                
            </div>
        )
    }
}
