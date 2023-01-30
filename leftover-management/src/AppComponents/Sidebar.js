import React from 'react'
import './Sidebar.css';
import vector1 from "./../images/icons/setting.png"
import vector2 from "./../images/icons/donate.png"
import { Link } from 'react-router-dom' 

function Sidebar() {
  return (
    <div >
    
   
<div className='diff'>
 <ul style={{marginTop:'100px', marginLeft:'-37px'}} > 

   <Link to="/Userprofile"><li>
        <div class="">
        <img src={vector1} />
        <div class="">
          <div class=""></div>
        </div>
        <div class=""></div>
      </div>
    </li>  </Link>
    
    </ul> 
   
</div>

<div className='diff1'>
 <ul style={{marginTop:'200px', marginLeft:'-102px'}} > 

   <Link to="/Donate"><li>
        <div class="">
        <img src={vector2} />
        <div class="">
          <div class=""></div>
        </div>
        <div class=""></div>
      </div>
    </li>  </Link>
    
    </ul> 
   
</div>

<div className='diff1'>
 <ul style={{marginTop:'290px', marginLeft:'-102px'}} > 

   <Link to="/Donate"><li>
        <div class="">
        <img src={vector2} />
        <div class="">
          <div class=""></div>
        </div>
        <div class=""></div>
      </div>
    </li>  </Link>
    
    </ul> 
   
</div>
<div className='diff1'>
 <ul style={{marginTop:'380px', marginLeft:'-102px'}} > 

   <Link to="/Donate"><li>
        <div class="">
        <img src={vector2} />
        <div class="">
          <div class=""></div>
        </div>
        <div class=""></div>
      </div>
    </li>  </Link>
    
    </ul> 
   
</div>


    </div>
  )
}

export default Sidebar
