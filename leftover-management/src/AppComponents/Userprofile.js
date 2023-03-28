import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "./Userprofile.css";
import { useState } from "react";

function Userprofile({setIsOpen,isOpen}) {


  const {image, setImage}= useState('')


  const handlechange = (e)=>{
    setImage(e.target.files[0])
  }
  return (
    
    <div >
      
      <Sidebar></Sidebar>
<div id="userprof" className={`  mt-5  ${isOpen ? "profilex" : "profile"}`}  >
<div className="row flex-lg-nowrap">
  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body " style={{padding:'10px'}}>
            <div className="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{ width: '140px'}}>
                   <input type="file" value={image} onChange={handlechange}></input>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div className="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                    <p className="mb-0">@johnny.s</p>
                    <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div className="mt-2 ">
                      <button className="btn btn-primary " style={{background:'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}} type="button">
                        <i className="fa fa-fw fa-camera "></i>
            
                         <span> Change Photo</span>
                       
                      </button>
                    </div>
                  </div>
                  <div className="text-center text-sm-right">
                    <span className="badge badge-secondary">administrator</span>
                    <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
              </ul>
              <div className="tab-content pt-3">
                <div className="tab-pane active">
                  <form className="form" noValidate="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input className="form-control" type="text" name="name" placeholder="John Smith" value="John Smith"/>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Username</label>
                              <input className="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Email</label>
                              <input className="form-control" type="text" placeholder="user@example.com"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <label>About</label>
                              <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="mb-2"><b>Change Password</b></div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Current Password</label>
                              <input className="form-control" type="password" placeholder="••••••"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>New Password</label>
                              <input className="form-control" type="password" placeholder="••••••"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                              <input className="form-control" type="password" placeholder="••••••"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary" style={{background:'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}} type="submit">Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
<Footer></Footer>
    </div>
  
  )
}

export default Userprofile




