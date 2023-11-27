import React from 'react'
import no_search_result from '../assets/Image/no_search_result.jpg'
import { Link } from 'react-router-dom'

const NoSearchResult = () => {
  return (
        <div className='flex flex-col w-screen '>
            <div>
              <img className='m-auto h-80' src={no_search_result} alt='error_page'></img>
            </div>
            <div>
              <p className='font-bold text-4xl w-fit my-2 mx-auto'>Sorry!! No Result Found :(</p>
              <p className='font-bold text-base w-fit my-2 mx-auto'>We couldn't find what you are looking for</p>
            </div>
        </div>

  )
}

export default NoSearchResult;