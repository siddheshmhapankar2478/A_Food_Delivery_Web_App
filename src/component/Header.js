import React, { useState } from "react";
import { Link } from "react-router-dom";
import food_delivery_logo from "../assets/Image/food_delivery_logo.png"
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import food_delivery_logo from "../assets/Image/food_delivery_logo.png"
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header=()=>{
    // const {user}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    const [toggle, setToggle] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
    
    return (
      <div className=' bg-[#36454F] w-full sticky top-0 left-0 right-0 z-10 '>
        <div className='flex justify-between items-center py-2 max-w-[1240px] mx-auto px-4 text-white  w-full'>

        <Link to="/"><img className=" w-20" src={food_delivery_logo} alt="food_villa_logo.png"></img></Link>
            {
                (toggle)?
            (<button className="text-white hidden sm:block mr-5" onClick={()=>{setToggle(!toggle);}}>
                <CloseIcon></CloseIcon>
            </button>):
            (<button className="text-white hidden sm:block mr-5"onClick={()=>{setToggle(!toggle);}}>
                <MenuIcon></MenuIcon>
            </button>)
            }

            <div className="flex sm:hidden">
                <ul className="flex">
                    <Link to="/"><li className="hover:text-[#F8781D] font-bold  px-3 py-2">Home</li></Link>
                    <Link to="/contact"><li className="hover:text-[#F8781D] font-bold px-3 py-2">Contact</li></Link>
                    <Link to="/instamart"><li className="hover:text-[#F8781D] font-bold px-3 py-2">Instamart</li></Link>
                    <Link to="/cart">
                        <li className="hover:text-[#F8781D] font-bold px-3 py-2"><ShoppingCartIcon></ShoppingCartIcon> 
                        <span className='hover:text-[#F8781D] font-bold'>{cartItems?.length}</span>
                        </li>
                    </Link>
                </ul>
                <Link to="/login"><button className="bg-black text-white hover:text-black hover:bg-white font-bold mx-5 px-2 py-1 rounded-sm w-20 mt-1" >Login</button></Link>
            </div>

            {/*---------------------- Mobile View------------------- */}
            <div className={`2xl:hidden xl:hidden lg:hidden md:hidden fixed bg-[#36454F]  top-[54px] w-full ${toggle}?'left-0':'left-[-100%]'}`}>
            <div className={`2xl:hidden xl:hidden lg:hidden md:hidden fixed bg-[#36454F]  top-[54px] w-full ${toggle?'left-0':'left-[-100%]'}`}>

                <ul className="">
                    <Link to="/"><li className="hover:text-[#F8781D] font-bold  px-3 py-2 mx-auto w-fit">Home</li></Link>
                    <Link to="/contact"><li className="hover:text-[#F8781D] font-bold px-3 py-2 mx-auto w-fit">Contact</li></Link>
                    <Link to="/instamart"><li className="hover:text-[#F8781D] font-bold px-3 py-2 mx-auto w-fit">Instamart</li></Link>
                    <Link to="/cart">
                        <li className="hover:text-[#F8781D] font-bold px-3 py-2 mx-auto w-fit"><ShoppingCartIcon></ShoppingCartIcon> 
                        <span className='hover:text-[#F8781D] font-bold'>{cartItems?.length}</span>
                        </li>
                    </Link>
                </ul>

                <div className="w-fit mx-auto">
                        <Link to="/login"><button className="bg-black text-white hover:text-black hover:bg-white font-bold mx-auto px-2 py-1 rounded-sm w-20 " >Login</button></Link>
                </div>
            </div>
                     
        </div>
      </div>
      </div>
    );
  };
  
  
export default Header;