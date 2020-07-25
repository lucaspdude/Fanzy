import React, { useEffect, useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'

import { MdMessage, MdStar } from 'react-icons/md';
import { FaCaretDown, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import Relatorios from '~/components/Relatorios';
import Avaliacao from './components/AvaliacaoSingle';

export default function Avaliacoes({usuario}) {
  const [currentSelected, setCurrentSelected] = useState(false);


  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        onClickCapture={() => setCurrentSelected(!currentEventKey)}

      >
        {isCurrentEventKey ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    );
  }






  // const avaliacoes = useSelector(state => state.user.profile.avaliacoes);
  const [avaliacoes, setAvaliacoes] = useState()
  const profile = useSelector(state => state.user.profile);

  function estrelasAvaliacao(nota) {
    var estrela;
    var estrelasCount = [];
    for (estrela = 0; estrela < nota; estrela++) {
      estrelasCount.push(estrela);
    }
    return (
      estrelasCount.map(estrela => <MdStar key={estrela} className="estrela" />)
    ) 
  }

  function dateFormat(date){

    return new Date(date).toLocaleDateString('pt-BR');
  }

  useEffect(() => {

    // api.get(`estabelecimentos/${profile.id}`)
    //   .then(response => {
    //     setAvaliacoes(response.data.avaliacoes)
    //   })
    //   .catch(error => {
    //     console.log(error.response)
    //   })

    setAvaliacoes(profile.avaliacoes)

  }, [])


  return (
    <>

        <div className="relatorios avaliacoes">
          <div className="avaliacao-list">
              <div className="titles">
                <div className="data">Data</div>
                <div className="avaliacao">Avaliação</div>
                <div className="usuarios">Quem estava na mesa</div>
                <div className="comentario">Comentário</div>
              </div>
              {!usuario && avaliacoes && avaliacoes.map(avaliacao => {
                return(
                  <Avaliacao key={avaliacao.id} avaliacao={avaliacao} />
                )
              })}

              {usuario && avaliacoes && avaliacoes.filter(avaliacao => {
                return avaliacao.user_id === usuario.id
              }).map(avaliacao => {
                return(
                  <Avaliacao key={avaliacao.id} avaliacao={avaliacao} />
                )
              })}
          </div>
        </div>
        
    </>
  );
}
