import { useState,useEffect } from "react";
const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);    
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);            
        return ()=>{
            removeEventListener("online",handleOnline);
            removeEventListener("offline",handleOffline);            
        }
    },[]);
    return isOnline;    
}
export default useOnline;