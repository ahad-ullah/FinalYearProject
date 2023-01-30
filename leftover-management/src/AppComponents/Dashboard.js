import React , {useState} from 'react'
import Navbarweb from './Navbar';
import Sidebar from './Sidebar'
import Userprofile from './Userprofile'
import Footer from './Footer'




function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    
    
                <div >
                    <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
                </div>
           
  
            

            
          

    </div>
  )
}

export default Dashboard
