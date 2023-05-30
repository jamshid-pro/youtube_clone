import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'

import Videos from './Videos'
import { fetchApi } from '../../utils/fetchApi'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState('')
  const [videos, setVideos] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'

  const {snippet: {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack justifyContent={{sm:'center'}} direction={{sm:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:86}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player' controls
            />
            <Typography color={'#fff'} variant='h5' fontWeight={'bold'} p={2}>
              {title}
            </Typography>
            <Stack direction={{sm:'column', md:'row'}} gap='20px' justifyContent='space-between' color='#fff' py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1', md:'h6'}} color='#fff' fontWeight={800}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'15px', color:'gray', ml:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap='20px' >
                <Typography variant='body1' sx={{opacity:'0.7'}}>
                    {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:'0.7'}}>
                    {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction={'column'} />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail
