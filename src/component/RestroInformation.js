import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { CARD_IMG_URL } from '../config';

const RestroInformation = ({restroInfo}) => {
  const discountArray=restroInfo?.info?.aggregatedDiscountInfo?.descriptionList;

  return (
    <div className='bg-[#282c34]' key={restroInfo?.info?.id}>
          <div className=' h-fit w-4/5 mx-auto p-5 flex text-white  md:flex-wrap sm:flex-wrap  ' >
              <div className='w-1/3 flex justify-center  md:w-2/5 sm:w-2/5'>
                <img className='w-fit rounded-lg ' src={CARD_IMG_URL+restroInfo?.info?.cloudinaryImageId}></img>
              </div>
              <div className='w-1/3 mx-24  md:mx-auto md:w-1/2 sm:w-1/2 sm:mx-auto '>
                <h3 className='text-4xl font-bold md:text-2xl'> {restroInfo?.info?.name}</h3>
                <h3 className='text-xl font-bold md:text-lg'>{restroInfo?.info?.cuisines.join(', ')}</h3>
                <div className='flex'>
                  <h3 className='text-xl pt-1 font-bold md:text-lg'>{restroInfo?.info?.avgRating} </h3>
                  <h3 className='text-xl font-bold md:text-lg'><StarIcon></StarIcon></h3>
                </div>
                <h3 className='text-xl font-bold md:text-lg'>{restroInfo?.info?.city} </h3>
                <h3 className='text-xl font-bold md:text-lg'>{restroInfo?.info?.costForTwoMessage}</h3>
              </div>
              <div className='w-1/3 border border-white h-fit p-4 md:w-full md:mt-4 sm:w-full sm:mt-4'>
                <h1 className='text-xl font-bold md:text-lg '>Offers:</h1>
                {
                  discountArray.map((item,index)=>{
                    return(
                        <h3 key={index} className='text-xl font-bold md:text-lg'>{item?.meta}</h3>
                    );
                    })
                }
              </div>
            </div>

        </div>

  )
}

export default RestroInformation