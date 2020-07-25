import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardMini from '../../components/Cards';
import { Cards } from './styles';
import Avaliacoes from './components/Avaliacoes';
import MaisConsumidos from './components/MaisConsumidos';
import api from '~/services/api';
import { formataValorEmReal } from '~/components/Calculos';
import MediaConsumo from './components/MediaConsumo';

export default function Dashboard() {
  const profile = useSelector(state => state.auth.profile);
  
  return (
    <div className="page dashboard">
      
    </div>
  );
}
