import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const SectionInfo = ({heading,description,isVisible,setVisibleSection})=>{
    return(
        <>
            <div className="border border-black m-4 p-2">
                <div className="flex justify-between">
                <h1 className="font-bold text-xl ">{heading}</h1>
                {
                    (isVisible)?
                    (   <>
                        <button className="border font-bold text-white bg-black p-2 border-black hover:bg-white hover:text-black rounded-sm" onClick={
                            ()=>{
                                setVisibleSection("");
                                }}><KeyboardArrowUpIcon></KeyboardArrowUpIcon></button>
                        </>):(
                            <button className="border font-bold text-white bg-black p-2 border-black hover:bg-white hover:text-black rounded-sm" onClick={
                            ()=>{
                                setVisibleSection(heading?.toLowerCase());
                            }}><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>)
                }
                </div>
                {
                    (isVisible)?
                    (<p className="p-2">{description}</p>):(null)
                }

            </div>
        </>
    );
}
const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about");
    return(
        <>
            <SectionInfo heading={"About"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, eius at soluta doloribus nihil corrupti non tempore vero excepturi fugit quisquam sit ipsa voluptates quidem reprehenderit deleniti veniam nobis assumenda! Error, sit cum ducimus enim, at quod veniam quas dolore ratione cupiditate dolorum distinctio dicta voluptatem culpa veritatis iure minus iste fuga aliquid sequi eius expedita. Quaerat, assumenda accusantium alias qui quo provident quos sed iure sequi magni labore doloribus nihil debitis sapiente totam id ipsum, dicta repellat ab autem architecto, nostrum delectus aut? Unde pariatur iure excepturi quaerat facilis! Aperiam ea iure qui eveniet explicabo in nisi animi quis."} isVisible={visibleSection==="about"} setVisibleSection={setVisibleSection}     />
            <SectionInfo heading={"Team"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, eius at soluta doloribus nihil corrupti non tempore vero excepturi fugit quisquam sit ipsa voluptates quidem reprehenderit deleniti veniam nobis assumenda! Error, sit cum ducimus enim, at quod veniam quas dolore ratione cupiditate dolorum distinctio dicta voluptatem culpa veritatis iure minus iste fuga aliquid sequi eius expedita. Quaerat, assumenda accusantium alias qui quo provident quos sed iure sequi magni labore doloribus nihil debitis sapiente totam id ipsum, dicta repellat ab autem architecto, nostrum delectus aut? Unde pariatur iure excepturi quaerat facilis! Aperiam ea iure qui eveniet explicabo in nisi animi quis."} isVisible={visibleSection==="team"} setVisibleSection={setVisibleSection}    />
            <SectionInfo heading={"Carrer"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, eius at soluta doloribus nihil corrupti non tempore vero excepturi fugit quisquam sit ipsa voluptates quidem reprehenderit deleniti veniam nobis assumenda! Error, sit cum ducimus enim, at quod veniam quas dolore ratione cupiditate dolorum distinctio dicta voluptatem culpa veritatis iure minus iste fuga aliquid sequi eius expedita. Quaerat, assumenda accusantium alias qui quo provident quos sed iure sequi magni labore doloribus nihil debitis sapiente totam id ipsum, dicta repellat ab autem architecto, nostrum delectus aut? Unde pariatur iure excepturi quaerat facilis! Aperiam ea iure qui eveniet explicabo in nisi animi quis."} isVisible={visibleSection==="carrer"} setVisibleSection={setVisibleSection}  />
        </>
    );
}
export default Instamart;