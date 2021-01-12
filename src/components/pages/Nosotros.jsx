import React from 'react'
import styled from '@emotion/styled'
import { notices } from '../infoPages/info'
import { Card } from '../cards/Card'


const PhraseWe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #cfdac8;
    color: #000;
    font-size:2rem;
    font-family: 'Pirata One', cursive;
    text-align: center;
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-content: space-around;
    margin-top: 2rem;
    @media(max-width:600px){
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Noticess = () => {
    const notice = notices.map(notice =>
            <Card
                phrase={notice.phrase}
                image={notice.image}
                alt={notice.alt}
                key={notice.alt}
            />
    )


    return (
        <>
            <div>
                <PhraseWe>
                    <p>¡Un ganador es un perdedor que nunca se dio por vencido!</p>
                </PhraseWe>
            </div>
            <Cards className="col-12">
                {notice}
            </Cards> 
        </>
    )
}
