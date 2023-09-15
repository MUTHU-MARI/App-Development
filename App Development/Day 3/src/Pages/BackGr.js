// // import ReactPlayer from 'react-player';
// import React from 'react';
// // const VIDEO_PATH = 'https://www.vecteezy.com/video/15871905-parachute-with-green-gift-box-floating-in-the-cloud-and-sky-isolated-on-blue-background-3d-animation';
// function PlayerComponent() {
// //    const playerRef = useRef(null);
//    return (
//       <div>
//          {/* <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} /> */}
//          <video width={500} height={500} controls autoplay muted loop>
//          <source src="https://www.vecteezy.com/video/15871905-parachute-with-green-gift-box-floating-in-the-cloud-and-sky-isolated-on-blue-background-3d-animation" type="video/mp4"/>
//           {/* <source src="movie.ogg" type="video/ogg"/> */}
//           </video>
//       </div>
//    )
// };
// export default PlayerComponent;
import React from 'react'
import '../Assets/Bg.css'
function BG() {
  return (
    <div>
        <div className="bg-video-wrap">
        <video src="https://vecteezy_parachute-with-green-gift-box-floating-in-the-cloud-and-sky_15871905_93.mp4" loop muted autoPlay>
        </video>
        <div className="overlay">
        </div>
      </div>  
     </div>
  )
}
export default BG;