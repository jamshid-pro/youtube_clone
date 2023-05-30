import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{width: {xs:'100%', sm:'358px', md:'320px' }, borderRadius:0, boxShadow:'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width:{sm: '100%', sm:'358px', md:'320px'}, height:180 }}
          component="img"
        />
      </Link>
      <CardContent sx={{backgroundColor:"#111", height:100}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color="#fff" fontWeight="bold">
                {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0.40)}
            </Typography>
        </Link>
        <Link  to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography mt={1} variant="subtitle2" color="gray" fontWeight="bold">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}} />
            </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
