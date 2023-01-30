import React from 'react'
import vector from './../images/donee.jpg'; 
import '.././css/bootstrap.min.css'
import '.././css/bootstrap-icons.css'
import '.././css/templatemo-kind-heart-charity.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Link,useNavigate } from 'react-router-dom' ;
import { useEffect } from 'react';
import axios from 'axios';
function Donee() {
    const navigate= useNavigate()
    const getData = ()=>{
        debugger;
        axios.get("https://localhost:7195/api/Login/GetUser",{
            
        }).then(resonse=>{
            console.log(resonse)
        }).catch(error=> {
            console.log(error)
        })
    }
    useEffect(()=>{
        if(!(localStorage.getItem('token')))
        {
            navigate('/login')
        }
    },[])
  return (
    <>
   
    <div>
    <Navbar></Navbar>
<section className="volunteer-section section-padding" id="section_4">
    <Sidebar></Sidebar>

                <div className="">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <h2 className="text-white mb-4">Donor Recipient</h2>

                            <form className="custom-form volunteer-form mb-5 mb-lg-0 "   style={{marginLeft:"120px"}} action="#" method="post" role="form">
                                <h3 className="mb-4">Become a Donee today</h3>

                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" name="volunteer-name" id="volunteer-name" className="form-control" placeholder="Jack Doe" required/>
                                    </div>

                                    <div className="col-lg-6 col-12">    
                                        <input type="email" name="volunteer-email" id="volunteer-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com" required/>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <input type="text" name="volunteer-subject" id="volunteer-subject" className="form-control" placeholder="Subject" required/>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="input-group input-group-file">
                                            <input type="file" className="form-control" id="inputGroupFile02"/>
                                            
                                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload your CV</label>

                                            <i className="bi-cloud-arrow-up ms-auto"></i>
                                        </div>
                                    </div>
                                </div>

                                <textarea name="volunteer-message" rows="3" className="form-control" id="volunteer-message" placeholder="Comment (Optional)"></textarea>

                                <button type="submit" className="form-control" onClick={getData} >Submit</button>
                            </form>
                        </div>

                        <div className="col-lg-6 col-12">
                            <img src={vector} className="volunteer-image img-fluid" alt=""/>

                            <div className="custom-block-body text-center">
                                <h4 className="text-white mt-lg-3 mb-lg-3">About Donee</h4>

                                <p className="text-white">We preferred donee to be a registered Ngo for more validity</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    
    <Footer></Footer>
     
    <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>
        </div>
    </>
  )
}

export default Donee
