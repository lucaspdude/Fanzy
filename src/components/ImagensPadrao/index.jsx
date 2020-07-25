import React, {useState, useEffect} from 'react'
import { Select, Choice } from '@rocketseat/unform'
import api from '~/services/api';

import {Container} from './styles'

export default function ImagensPadrao() {


    const [categorias, setCategorias] = useState([])
    const [selectedCategoria, setSelectedCategoria] = useState(false)
    const [imagens, setImagens] = useState([])


    useEffect(() => {
        api.get('admin/categorias')
            .then(response => {
                setCategorias(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })


        api.get(`admin/imagens?filtro=${selectedCategoria}`)
            .then(response => {
                setImagens(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [selectedCategoria])

    const categoriasOptions = categorias.map(categoria => {
        const filtered = {};
        filtered['id'] = categoria.descricao;
        filtered['title'] = categoria.descricao;
        return filtered;
    })


    const options = imagens.map(imagem => {
        const filtered = {};
        filtered['value'] = `${imagem.media[0].id}/${imagem.media[0].file_name}`;
        filtered['label'] = <>
            {/* <span>{imagem.categoria} > {imagem.subcategoria}</span> */}
            <img src={imagem.media[0].url} alt={imagem.titulo} className="imagem" />
        </>
        return filtered;
    })

    return (
        <Container>
            <Select name="categoria" options={categoriasOptions} onChange={(e) => setSelectedCategoria(e.target.value)} placeholder="Selecione uma Categoria" />
            {selectedCategoria && "Selecione uma das Imagens abaixo:"}
            <br />
            <Choice name="imagemPadrao" options={options} className="imagem-padrao-choice" />
        </Container>
    )
}
