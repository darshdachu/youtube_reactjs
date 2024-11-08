// import React, { useState } from 'react'
// import JSON from "./video.json";
// import VideoContainer from './coponents/VideoComp/VideoContainer';
// import "./App.css"

// const App = () => {
//   let [state,setState]=useState(JSON)
//   let [selectedVideo,setSelectedVideo]=useState(state[0])

//   console.log(state);


//   let handleClick=(item)=>{
//    console.log(item);
//     return setSelectedVideo(item.videoUrl)

//   }
//   return (
//     <div>
      
//           <VideoContainer 
//           state={state} 
//           selectedVideo={selectedVideo} 
//           handleClick={handleClick}></VideoContainer>
       
//     </div>
//   )
// }

// export default App

// ---------------------------------------------------------------------------


import React, { useState } from 'react'
import JSON from "./video.json"
import VideoContainer from './coponents/VideoComp/VideoContainer';

const App = () => {

  let [state,setState]=useState(JSON)
  let [runvideo,setrunvideo]=useState(state[0])

  let magic=(item)=>{
    console.log(item);
    
    setrunvideo(item.videoUrl)

  }

  return (
    <div>
      <VideoContainer state={state} runvideo={runvideo}  magic={magic}></VideoContainer>
    </div>
  )
}

export default App
