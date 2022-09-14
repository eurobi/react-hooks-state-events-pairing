import { useState } from 'react'
import VideoComments from './VideoComments'
import VideoStats from './VideoStats'

function VideoInfo({ videoData }){
    const [commentsOn, setComments] = useState(true)

    function handleHideComments(e){
        setComments(!commentsOn)
    }
    

    return (
        <>
            <h1>{videoData.title}</h1>
            <VideoStats videoData={videoData} />
            <br></br>
            <button onClick={handleHideComments}>{commentsOn? 'Hide Comments' : 'Show Comments'}</button>
            <hr></hr>
            {commentsOn? <VideoComments videoData={videoData} /> : ""}
        </>
    )
}



export default VideoInfo