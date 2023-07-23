import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_IMAGE_ITEM_URL } from '../config';
import EmptyCart from './EmptyCart';
import { clearCart, decrementItem, incrementItem } from '../utils/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items);
    let totalAmount=0;
    let deliveryAmount=30;
    const dispatch=useDispatch();
    function handleClearCart(){
        dispatch(clearCart());
    }
    function handleIncrement(item){
        dispatch(incrementItem(item));
    }
    function handleDecrement(item){
        dispatch(decrementItem(item));
    }    
    return (cartItems?.length==0)?      
        (<EmptyCart/>):
   (
    <>
    <div className='flex'>
        <div className='flex flex-col w-4/5 px-10 py-4 lg:w-3/4 md:w-2/3 sm:w-3/5'>
            <div className='flex justify-between  mb-5'>
                <h1 className=' mx-5 p-3  ml-0 font-bold text-xl'>Your Cart</h1>
                <button className='border font-bold text-white bg-black p-2 border-black hover:bg-white hover:text-black rounded-sm' onClick={()=>{
                    handleClearCart();
                }}><RemoveShoppingCartIcon></RemoveShoppingCartIcon>Clear Cart</button>
            </div>
            <hr className='w-full h-[2px] bg-slate-400 mb-4'></hr>
            {
                cartItems.map((item)=>{
                    const {id,name,price,imageId}=item?.info;
                    const {itemCount}=item;
                    totalAmount=totalAmount+price*itemCount/100;
                    let amount=itemCount*price/100;
                    return(
                            <div key={id} className='flex border border-slate-400 justify-between w-full my-1 shadow-lg rounded-lg'>
                                <div>
                                    <h1 className='font-bold text-xl p-2 m-2'>{name}</h1>
                                    <div className='flex'>
                                        <h1 className='font-bold text-base p-2 mt-4'>₹ {price/100}</h1>
                                        <div className='flex m-4 w-[100px] border border-slate-400 sm:m-2'>
                                            <button className='border font-bold text-white bg-black p-1 border-black hover:bg-white hover:text-black rounded-sm' onClick={()=>{handleIncrement(item);}}><AddIcon></AddIcon></button>
                                            <p className='py-2 px-3 font-bold text-base'>{itemCount}</p>
                                            <button className='border font-bold text-white bg-black p-1 border-black hover:bg-white hover:text-black rounded-sm'onClick={()=>{handleDecrement(item);}}><RemoveIcon></RemoveIcon></button>
                                        </div>
                                    </div>
                                        <p className='py-2 px-4 font-bold text-base '>Total price: {amount}</p>
                                </div>
                                <img className='w-36 m-4 rounded-lg sm:w-20 sm:h-20 sm:m-2 sm:my-auto' src={MENU_IMAGE_ITEM_URL+imageId} alt="img"></img>
                            </div>
                    );
                })
            }
            
        </div>
            
        <div className='flex flex-col w-fit mx-10 border border-slate-400 p-2 fixed my-5 right-0 shadow-lg rounded-lg'>
            <h1 className='font-bold text-2xl p-2 m-2'>Bill Details</h1>
                <h1 className=' text-base px-2 m-2'> To Pay - ₹ {(totalAmount).toFixed(2)}</h1>
                <h1 className=' text-base px-2 m-2'> Delivery - ₹ {deliveryAmount}</h1>
                <h1 className=' text-base px-2 m-2'> CGST - ₹ {(0.05*totalAmount).toFixed(2)}</h1>
                <h1 className='font-bold text-xl p-2 m-2'> Total - ₹ {(totalAmount+deliveryAmount+(0.05*totalAmount)).toFixed(2)}</h1>
            <button className='border font-bold text-white bg-black p-2 border-black hover:bg-white hover:text-black rounded-sm w-fit mx-auto'>Pay Now</button>
        </div>
    </div>

    </>
  )
}

export default Cart