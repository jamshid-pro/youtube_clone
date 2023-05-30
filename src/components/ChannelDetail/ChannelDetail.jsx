import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { Videos, ChannelCard } from "../";
import { fetchApi } from "../../utils/fetchApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`)
		.then((data) => setChannelDetail(data?.items[0]))

    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
		.then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box>
      <div style={{
            background:"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(181,26,207,1) 100%",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
			<Box display='flex' p={2} >
				<Videos mx='auto' videos={videos} />
			</Box>
    </Box>
  );
};

export default ChannelDetail;
