import React from 'react'
import { Banner } from '../component/Banner'
import { Card } from '../cards/Card'
import { aboutWe } from '../infoPages/info'
import styled from '@emotion/styled'

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

export const Body = () => {
    const aboutwe = aboutWe.map(notice =>
        <Card
            phrase={notice.phrase}
            image={notice.image}
            alt={notice.alt}
            key={notice.alt}
        />
)
    return (
        <>
            <Banner />
            <div className="p-3 mt-2">
                <div className="row">
                    <div className=" col-12 col-sm-12 col-m-7 col-lg-7">

                    </div>
                    <Cards className="col-12">
                        {aboutwe}
                    </Cards>
                </div>
            </div>
        </>
    )
}
