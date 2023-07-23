const Shimmer=()=>{
    return(
        <>
            <div className=" animate-pulse flex mx-auto w-1/2 my-6 bg-gray-400 rounded-md shadow-md border border-slate-400 ">
                <div className=" w-full h-12 py-2 mr-1"></div>
            </div>

            <div className="flex flex-wrap mx-28" key="1">
            {
                Array(20).fill("").map((e,index)=>{
                    return (
                        <div className=" animate-pulse w-60 h-[360px] m-2 p-2 shadow-lg " key={index}>
                            <div className="w-60 h-44 bg-gray-400"></div>
                            <div className="w-60 h-7 px-2 py-1 bg-gray-400 my-2"></div>
                            <h3 className="w-48 h-7 px-2 py-1 my-2 bg-gray-400"></h3>
                            <div className='flex py-1 '>
                                <div className="w-20 h-7 bg-gray-400 px-2"></div>
                                <div className='w-20 h-7 bg-gray-400  mx-2'></div>
                            </div>
                            <h3 className="w-20 h-7 bg-gray-400 px-2 my-1"></h3>
                        </div>

                        );
                        })
            }
            </div>
            
        </>
    );
}
export default Shimmer;