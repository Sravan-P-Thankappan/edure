
import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../util/AuthContext'


const Navbar = ({toggle,setForm}) => {
    
    const navigate = useNavigate()
    const { setLoggedIn } = useContext(UserContext)

   const home = ()=>{
      
      setForm(false)
   }

   const logout = ()=>{
    localStorage.removeItem('userId')
    setLoggedIn(false)
      navigate('/')

   }
    return (
        <nav
            className="relative flex w-full flex-wrap items-center justify-between h-[6vh]
            shadow-xl
            bg-[#0a66c2]">
            <div className="flex w-full flex-wrap items-center justify-between px-6">
                <div>
                    <span
                      onClick={home}
                        className="text-xl font-semibold text-neutral-800 dark:text-neutral-200"
                        href="#"
                    >Home</span>
                </div>
                <div>
                    <button
                    onClick={logout}
                    className='bg-white px-3 py-1 rounded text-blue-700'

                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar