import React from 'react'
import {Relatorio, Titles, Content, ContentRow} from './styles';
import Accordion from 'react-bootstrap/Accordion';
import { FaCaretDown, FaChevronDown } from 'react-icons/fa';


export default function Relatorios({titles, data, ...rest}) {



    return (
        <Relatorio>
            <Titles>
                {titles.map((title) => {
                    return (
                        <div key={title} className={`title-child ${title}`}>{title}</div>
                    )
                })}
            </Titles>
            <Content>
                {data.map(item => {
                    return(
                            <Accordion key={item.id}>
                                
                                <Accordion.Toggle eventKey={item.id}>
                                    <FaChevronDown />
                                </Accordion.Toggle>

                            </Accordion>
                    )
                })}
            </Content>



        </Relatorio>
    )
}
