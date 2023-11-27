const ShimmerMenu=()=>{
    return(
        <>
            <div className=" animate-pulse">
                <div className="">
                    <div className='bg-gray-300 h-60 p-5 flex px-32 text-white '>
                        <div className='w-80 h-48 bg-gray-400' ></div>
                        <div className='mx-24 '>
                            <div className='w-60 h-7 m-2 bg-gray-400'></div>
                            <div className='w-28 h-7 m-2 bg-gray-400'></div>
                            <div className='w-24 h-7 m-2 bg-gray-400'></div>
                            <div className='w-24 h-7 m-2 bg-gray-400'></div>
                            <div className='w-28 h-7 m-2 bg-gray-400'></div>
                        </div>
                        <div className=' bg-gray-200  h-32 w-96 p-4'>
                            <div className='w-24 h-7 m-1 bg-gray-400'></div>
                            <div className='w-60 h-7 m-1 bg-gray-400'></div>
                            <div className='w-60 h-7 m-1 bg-gray-400'></div>
                        </div>
                    </div>

                </div>
                <div className='w-3/4 h-20 mx-auto my-3 justify-between border border-black'>
                    <div className="w-64 h-12 mx-2 my-4 bg-gray-400"></div>
                </div>
                <div className="">
                {
                    Array(20).fill("").map((e,index)=>{
                        return (
                            <div key={ index } className='flex w-3/4 h-48 mx-auto my-3 justify-between border border-slate-400'>
                                <div>
                                    <div className="w-64 h-7 m-2 mt-4 bg-gray-400"></div>
                                    <div className="w-24 h-7 m-2 bg-gray-400"></div>
                                    <div className="w-96 h-16 m-2 bg-gray-400"></div>
                                    <div className="w-24 h-7 m-2 bg-gray-400"></div>
                                </div>
                                <div className="w-48 h-40 m-2 bg-gray-400"></div>
                            </div>

                            );
                            })
                }
                </div>
            </div>
            
        </>
    );
}
export default ShimmerMenu;