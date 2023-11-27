import error_page from '../assets/Image/error_page.jpg'

const Offline=()=>{
    return(
        <>
            <img className='m-auto h-96' src={error_page} alt='error_page'></img>
            <p className='font-bold text-4xl w-fit my-2 mx-auto'>OOPS!! You are offline</p>
        </>
    );
}
export default Offline;