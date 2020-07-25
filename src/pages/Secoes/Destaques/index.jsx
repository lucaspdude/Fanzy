import React from 'react';
import ReactPlayer from 'react-player'
import PostList from '~/components/Posts/PostList';
import UserBadge from '~/components/User/UserBadge';
import VideoList from '~/components/Videos/VideoList';

// import { Container } from './styles';

function Destaques() {
  return (
      <div className="page ">
          <div className="page-header">
              <h2>
                  Destaques
              </h2>
          </div>
          <div className="page-content">
              <div className="destaque">
                    <div className="media-container">
                        <ReactPlayer 
                            url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className="content-container">
                        <UserBadge user={{name: "@lucasFpacheco92"}} />


                        <div className="content">
                            <h4>Aplicativos nativos para Desktop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus et voluptatem odit, iusto repellat.</p>
                        </div>
                        <div className="tags">
                            <div className="tag">Video</div>
                            <div className="tag">Tecnologia</div>
                            <div className="tag">Música</div>
                            <div className="tag">Outros</div>
                            <div className="tag">Dev</div>
                        </div>


                        
                    </div>
                </div>

                <PostList />

                <div className="section video-list novidades">
                    <h3>Novidades</h3>
                    <VideoList />
                </div>

          </div>
      </div>
  );
}

export default Destaques;