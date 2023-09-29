import React from "react";


const Video = () => {
    return(
        <>
        <h3 className="title-cursos">Video Director</h3>
        <iframe 
        width="100%" 
        height="80%" 
        src="https://www.youtube.com/embed/nxBo0chcu4Y" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        style={{borderRadius:"20px"}}>
             
        </iframe>

        </>
    )

}

export default Video