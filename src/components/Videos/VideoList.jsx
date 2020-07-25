import React from 'react';
import Video from './Video';

// import { Container } from './styles';

const videos = [
    {
        id: 1,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 2,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 3,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 4,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 5,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 6,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 7,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 8,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 9,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 10,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 1,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 2,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 3,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 4,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 5,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 6,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 7,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 8,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 9,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
    {
        id: 10,
        url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        user: {
            id: 125,
            name: "@marcelaFreitasPereira",
            url: ''
        },
    },
]

function VideoList() {
  return (
      <div className="video-container">
          {videos.map(video => {
              return <Video key={video.id} video={video} />
          })}
      </div>
  );
}

export default VideoList;