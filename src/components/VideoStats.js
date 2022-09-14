import react, {useState} from "react"

function VideoStats({ videoData }){
const [upvotes, setUpvotes] = useState(videoData.upvotes)
const [downvotes, setDownvotes] = useState(videoData.downvotes)

function handleUpvote(e){
    setUpvotes(upvotes + 1)

}

function handleDownvote(e){
    setDownvotes(downvotes + 1)
}


    return(
        <div>
            <p>{videoData.views} Views | Uploaded {videoData.createdAt}</p>
            <button onClick={handleUpvote}>{upvotes} 👍</button>
            <button onClick={handleDownvote}>{downvotes} 👎</button>
        </div>
    )

}


export default VideoStats