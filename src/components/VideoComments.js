import Comment from './Comment'

function VideoComments({ videoData }){
    const commentElements = videoData.comments.map((comment) => <Comment comment={comment} />)

    return(
        <div>
            <h2>{videoData.comments.length} Comments</h2>
            {commentElements}
        </div>
    )
}


export default VideoComments