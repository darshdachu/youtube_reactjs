// import React from 'react'

// const Player = ({selectedVideo}) => {
//   return (
//     <div>
//         <video src={selectedVideo} controls> </video>
//     </div>
//   )
// }

// export default Player

// ----------------------------------------------------

import React from 'react'

const Player = ({runvideo}) => {

  return (
    <div>
      <video src={runvideo} controls></video>
    </div>
  )
}

export default Player