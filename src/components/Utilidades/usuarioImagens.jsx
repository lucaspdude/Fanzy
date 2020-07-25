import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '~/services/api';

export function UserLogo() {
  const estabelecimento = useSelector(state => state.user.profile);
  const action = useSelector(state => state.user.action);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    api.get(`estabelecimentos/${estabelecimento.id}`).then(response => {
      //   console.log(response.data.media)
      setMedia(response.data.media);
    });
  }, [action]);

  return (
    <>
      {media &&
        media
          .filter(media => {
            return media.collection_name == 'logo';
          })
          .map(item => {
            return (
              <img
                key={item.id}
                src={item.url}
                alt="Logo"
                className="shadow-sm"
              />
            );
          })}
    </>
  );
}

export function UserCapa() {
  const estabelecimento = useSelector(state => state.user.profile);
  const action = useSelector(state => state.user.action);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    api.get(`estabelecimentos/${estabelecimento.id}`).then(response => {
      setMedia(response.data.media);
    });
  }, [action]);

  //   console.log(estabelecimento)

  return (
    <>
      {media
        .filter(media => {
          return media.collection_name == 'capa';
        })
        .map(media => {
          return <img key={media.id} src={media.url} alt="capa" />;
        })}
    </>
  );
}
