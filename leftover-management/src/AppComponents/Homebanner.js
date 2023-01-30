import React from 'react'
import vector from "./../Images/home.jpg"
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom';
import Developers from './Developers'
import vector3 from "./../Images/hands.jpg"
function Homebanner() {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div>
     <div className="banner-area banner-area-2 banner-area-bg" style={{background: `url(${vector})`}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            <p>Join Hands to feed those who are in need</p>
			            <div className="line" />
			            <h2 >LET'S ELIMINATE HUNGER FROM PAKISTAN</h2>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
            <div className='mt-5 mb-5'>
                <h1 style={{color: "black"}}>OUR GOALS</h1>
            </div>
            <div className="service-area bg-gray">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2" >
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>No Food Wastage</h4>
			            <p>Our aim is to provide extra food the hungry people out there to remove food Wastage</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2" >
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>No hunger</h4>
			            <p>Our mission is to provide food to the everyone, we wish to remove hunger from all over pakistan</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2 mb-0" >
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>Useful Consumption</h4>
			            <p>We enable food sharing by creating system that enable Donors to give extra food to 
                       the Hungry.</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
            <div className="product-area pd-top-118 pd-bottom-90 go-top mt-5 mb-5 center"  style={{background: `url(${vector3})`, justifyContent: 'center', backgroundRepeat: 'no-repeat' , backgroundSize:'cover',}}>
			  <div className="container">
			    <div className="section-title text-center" >
			      <h2>How ShareKhairah Works</h2>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/1.png"} alt="img" />
			            <Link className="cat" to="/Signup1">Donor</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="media-body">
                          <h5 style={{color:'white'}}>Anyone can donate food including restaurants, wedding halls etc</h5>
			              </div>
			            </div>
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/2.png"} alt="img" />
			            <Link className="cat" to="/Signup1">Donee</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="media-body">
			                <h5 style={{color:'white'}}>Any NGO can become donee to recieve food</h5>
			              </div>
			             
			            </div>
			            
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/3.png"} alt="img" />
			            <Link className="cat" to="/Signup1">Rider</Link>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="media-body">
                          <h5 style={{color:'white'}}>Anyone can give rider services either from donor , donee or ShareKhairah side</h5>
			              </div>
			             
			            </div>
			           
			          </div>          
			        </div>
			      </div>     
			    </div>
			  </div>
			</div>
            <Testimonial></Testimonial>

           <Developers></Developers>
    </div>
  )
}

export default Homebanner
