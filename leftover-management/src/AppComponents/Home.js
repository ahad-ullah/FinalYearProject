import React from 'react'
import '.././css/bootstrap.min.css'
import '.././css/bootstrap-icons.css'
import '.././css/templatemo-kind-heart-charity.css'
import vector from ".././images/portrait-volunteer-who-organized-donations-charity.jpg"
import vector3 from ".././images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
import vector1 from '.././images/slide/pic1.jpg'
import vector2 from '.././images/slide/home.jpg'
import vector4 from "./../images/icons/receive.png"
import vector5 from "./../images/icons/food-donation.png"
import vector6 from "./../images/icons/famine.png"
import vector7 from "./../images/icons/recycle.png"
import vector8 from "./../images/help.png"
import vector9 from "./../images/causes/cause1.jpg"
import vector10 from "./../images/causes/cause2.jpg"
import vector11 from "./../images/causes/cause3.jpg"
import Team from './Team'
import Navbar from './Navbar'
import Footer from './Footer'
function Home() {
  return (
    <div>
     <Navbar></Navbar>
        <main>
  
            <section className="hero-section hero-section-full-height" id="section_1">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12 col-12 p-0">
                            <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item ">
                                        <img src={vector1} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h1>Join Hands</h1>
                                            
                                            <p>Lets eliminate hunger from Pakistan</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item active">
                                        <img src={vector3} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h1>Be a Donar</h1>
                                            
                                            <p>Mission to feed hungery</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={vector2} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h1>Humanity</h1>
                                            
                                            <p>Lets work for our people</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
  </section>


            <section className="section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 text-center mx-auto">
                            <h2 className="mb-5">Goals of ShareKhairah</h2>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="donate.html" className="d-block">
                                    <img src={vector7} className="featured-block-image img-fluid" alt=""/>

                                    <p className="featured-block-text">No Food <strong>wastage</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="donate.html" className="d-block">
                                    <img src={vector6} className="featured-block-image img-fluid" alt=""/>

                                    <p className="featured-block-text">No<strong> Hunger</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="donate.html" className="d-block">
                                    <img src={vector5} className="featured-block-image img-fluid" alt=""/>

                                    <p className="featured-block-text">Ease in  <strong>Donation</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="donate.html" className="d-block">
                                    <img src={vector4} className="featured-block-image img-fluid" alt=""/>

                                    <p className="featured-block-text">Ease for<strong> Donee</strong></p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section-padding section-bg text-center" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <img src={vector8} className="custom-text-box-image img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="custom-text-box">
                                <h3 className="mb-2">What ShareKhairah Encourages</h3>

                                <h6 className="mb-3">Donate clean leftover food</h6>

                                <p className="mb-0">ShareKhairah is working on the mission to deliver leftover clean food of restaurants, local gatherings and wedding halls to registererd NGOs so that they can feed poor.</p>
                            </div>
                            
                            <div className="row a justify-content-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="custom-text-box mb-lg-0">
                                        <h5 className="mb-3">Our Target Donors</h5>

                                        <p>Besides these donors one can donate individually</p>

                                        <ul className="custom-list mt-2">
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                                Restaurants
                                            </li>

                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                                Local gatherings
                                            </li>
                                            <li className="custom-list-item d-flex">
                                                <i className="bi-check custom-text-box-icon me-2"></i>
                                                Wedding Halls
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section-padding" id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 text-center mb-4">
                            <h2>How ShareKhairah works</h2>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="custom-block-wrap text-center">
                                <img src={vector9} className="custom-block-image img-fluid" alt=""/>

                                <div className="custom-block">
                                    <div className="custom-block-body">
                                        <h5 className="mb-3">Be a Donor</h5>

                                        <p>Donate your leftover food to minimize food wastage and remove hunger</p>

                                    </div>

                                    <a href="donate.html" className="custom-btn btn">Join us</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 text-center">
                            <div className="custom-block-wrap">
                                <img src={vector10} className="custom-block-image img-fluid" alt=""/>

                                <div className="custom-block">
                                    <div className="custom-block-body">
                                        <h5 className="mb-3">Be a Donee</h5>

                                        <p>Being an Ngo owner its a right place for you to get food donations </p>

                                       
                                    </div>

                                    <a href="donate.html" className="custom-btn btn">Join us</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 text-center">
                            <div className="custom-block-wrap">
                                <img src={vector11} className="custom-block-image img-fluid" alt="" style={{height:'280px'}}/>

                                <div className="custom-block">
                                    <div className="custom-block-body">
                                        <h5 className="mb-3">Be a Rider</h5>

                                        <p>Give your services as a rider, you can do it volunteerily or charge for it</p>

                                    </div>

                                    <a href="donate.html" className="custom-btn btn">Join us</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="cta-section section-padding section-bg mb-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-5 col-12 ms-auto">
                            <h2 className="mb-0">Make an impact. <br/> Save lives.</h2>
                        </div>

                        <div className="col-lg-5 col-12">
                            <a href="#section_4" className="custom-btn btn smoothscroll ">Sign up Now</a>
                            </div>
                       

                    </div>
                </div>
            </section> 

            

           

            <section className="about-section section-padding text-center">
                <h1>Meet Our Team</h1>
                <Team/>
            </section>
          

        </main>
        <Footer></Footer>

        

        
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/click-scroll.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>

   

    </div>
  )
}

export default Home
