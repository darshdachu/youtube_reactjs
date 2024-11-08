// import React from 'react'

// const VideoItem = (props) => {
 
//   let {title,thumbnailUrl}=props.video;
//   return (
//     <div className='videoItem' onClick={() => props.handleClick(props.video)}>
//         <figure>
//             <picture>
//                 <img src={thumbnailUrl} alt={title} />
//             </picture>
//         </figure>
//         <main>
//             <h2>{title.slice(0,30)+"..."}</h2>
//         </main>
//     </div>
//   )
// }

// export default VideoItem

// ----------------------------------------------------------------------------

import React from 'react'

const VideoItem = (props) => {
  console.log(props);

  let {title,thumbnailUrl}=props.data
  
  return (
    <div onClick={()=>{props.magic(props.data)}}>
      <figure>
        <img src={thumbnailUrl} alt={title} />
      </figure>

      <h2>{title.slice(0,30+"...")}</h2>
    </div>
  )
}

export default VideoItem