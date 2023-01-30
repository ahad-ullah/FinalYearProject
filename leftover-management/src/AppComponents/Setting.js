import React , {useState} from 'react'
import Userprofile from './Userprofile';
import Sidebar from './Sidebar';
import Navbarweb from './Navbar';

function Setting() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbarweb></Navbarweb>
    
    <div >
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>


    <div >
      <Userprofile setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
    </div>
  )
}

export default Setting
