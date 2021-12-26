import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/logo.svg'

const Menu =()=>(
    <>
    <p><a href="#home">Home</a></p>
     <p><a href="#wgp3">What is GPT3</a></p>
     <p><a href="#possibility">Open AI</a></p>
     <p><a href="#features">Case Studies</a></p>
     <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu]=useState(false);

    return (
        <div className='gpt3__navbar'>
           <div className='gpt3__navbar-links'>
               <div className='gpt3__navbar-links_logo'>
                   <img src={Logo} alt="Logo"  />
               </div>
               <div className='gpt3__navbar-links_container'>
                 <Menu/>
               </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sing in</p>
                <button type='button'>Sing up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu
                ? <RiCloseLine color='#fff' size={26} onClick={()=> setToggleMenu(false)}/>
                : <RiMenu3Line color='#fff' size={26} onClick={()=> setToggleMenu(true)}/>
            }
            {
                toggleMenu &&(
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                        <Menu/>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Navbar
