import React, { useState, useEffect } from 'react';
import { Choice, Input, FileInput, Select } from '@rocketseat/unform';

import api from '~/services/api';





export default function ImagensProdutos({ formikItem }) {
    const [imagens, setImagens] = useState([])
    const [imagemOption, setImagemOption] = useState(false);
    const [preview, setPreview] = useState(false);
    const [categorias, setCategorias] = useState([])
    const [selectedCategoria, setSelectedCategoria] = useState(false)


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
            <span>{imagem.categoria} > {imagem.subcategoria}</span>
            <img src={imagem.media[0].url} alt={imagem.titulo} className="produto-img-form-cardapios shadow-sm" />
        </>
        return filtered;
    })


    return (
        <>
            <div className="produto-img-form-label">


                {!imagemOption &&
                    <>
                        <button className="btn btn-extra-small btn-info" onClick={() => setImagemOption(true)}>Usar imagem padrão</button>
                        <br />
                        <FileInput name="imagem" className="fileinput-hidden" onChange={(e) => console.log(e.target.files[0])} />
                        {/* <Input type="file" name="imagem" className="mt-3" className="fileinput-hidden" onChange={(e) => {
                            setPreview(URL.createObjectURL(e.target.files[0]));
                            console.log(e.target.files[0])
                        }} /> */}
                        <label htmlFor="imagem">
                            <i className="fa fa-upload mr-3"></i>
                                    Clique aqui para enviar sua imagem
                                </label>
                        {preview &&
                            <>
                                <br />
                                <img src={preview} className="produto-img-form-cardapios shadow-sm" alt="Preview Imagem" />
                            </>
                        }
                    </>
                }

                {imagemOption &&
                    <>
                        <button className="btn btn-extra-small btn-info mb-3" onClick={() => setImagemOption(false)}>Enviar Imagem</button>
                        <br />
                        <Select name="filtro" options={categoriasOptions} placeholder="Selecione uma categoria" onChange={(e) => setSelectedCategoria(e.target.value)} />
                        <Choice name="imagem-padrao" options={options} />
                    </>
                }

            </div>
        </>
    )
}