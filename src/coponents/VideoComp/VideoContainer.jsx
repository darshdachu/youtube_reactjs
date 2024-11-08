// import React from 'react'
// import VideoItem from './VideoItem'
// import Player from './Player'

// const VideoContainer = ({state,selectedVideo,handleClick}) => {
//     return (
//         <section id='videoblock'>
//             <article>
//                 <aside className='left'>
//                   <Player selectedVideo={selectedVideo}></Player>
//                 </aside>

//  {/* ----------------------------------------------------------------------                */}
//                 <aside className='right'>
//                     {
//                         state.map(video=>{
//                             console.log(video);
//                           return <VideoItem key={video.id} video={video}  handleClick={handleClick}></VideoItem>
//                         })
//                     }
//                 </aside>
//             </article>
//         </section>
//     )
// }

// export default VideoContainer

// --------------------------------------------------------------------------------


import React from 'react'
import Player from './Player'
import VideoItem from './VideoItem';

const VideoContainer = ({state,runvideo,magic}) => {
  return (
    <div>
        <section>
            <article>
                <aside>
                    <Player runvideo={runvideo}></Player>
                </aside>

                {/* ----------------------------------------------------------- */}

                <aside>
                    {
                        state.map(data=>{
                            // console.log(data);

                            return <VideoItem key={data.id} data={data} magic={magic}></VideoItem>
                            
                        })
                    }
                </aside>
            </article>
        </section>
    </div>
  )
}

export default VideoContainer