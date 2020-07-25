import React, { useEffect, useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'

import { MdMessage, MdStar } from 'react-icons/md';
import { FaCaretDown, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '~/services/history';


export default function Avaliacao({avaliacao}) {

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



  return(
      <>
      <Accordion className={`avaliacao-single ${currentSelected ? 'current' : ''}`} >

<div className="avaliacao-displayed" >
    <div className="data" onClick={() => history.push(`/dashboard/clientes?${avaliacao.user.email}`)}>{dateFormat(avaliacao.created_at)}</div>
    <div className="avaliacao" onClick={() => history.push(`/dashboard/clientes?${avaliacao.user.email}`)}>{estrelasAvaliacao(avaliacao.nota)}</div>
    <div className="usuarios" onClick={() => history.push(`/dashboard/clientes?${avaliacao.user.email}`)}>
      <Link to={`/dashboard/clientes`}>
      <img src={avaliacao.user.media[0].url} alt="Usuário"/>
      </Link>
    </div>
    <div className="comentario" onClick={() => history.push(`/dashboard/clientes?${avaliacao.user.email}`)}>
      <MdMessage /> {avaliacao.comentario}
    </div>
    <div className="toggle" >
      <ContextAwareToggle eventKey={avaliacao.id} />
    </div>
</div>
<Accordion.Collapse eventKey={avaliacao.id} className="avaliacao-toggled" >
  <>
  {avaliacao.comentario}
  </>
</Accordion.Collapse>

</Accordion>

      </>
  )
}
