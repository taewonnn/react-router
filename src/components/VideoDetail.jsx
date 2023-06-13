import {useParams} from "react-router-dom";

function VideoDetail () {

  // useParams
  const params = useParams();
  console.log(params);

  const { videoId } = useParams();

  return (
    <>
      VideoDetail : {videoId}
    </>
  )
}

export default VideoDetail;
