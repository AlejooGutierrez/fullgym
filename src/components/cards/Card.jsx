import React from 'react'
import styled from '@emotion/styled'

const FraseCoah1 = styled.div`
    background-color: #222831;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 1rem;
`
const ImagenCoach1 = styled.div`
    padding: 1rem;
    background-color: #f05454;
    border-radius: 10px;
    div img{
        border-radius: 10px;
    }
`


export const Card = ({phrase, image, alt}) => {
    return (
        <ImagenCoach1 className="col-12 col-sm-12 col-m-5 col-lg-5 mb-4">
            <FraseCoah1 className="mt-2">
                <p>{phrase}</p>
            </FraseCoah1>
            <div className="p-2">
                <img src={image} alt={alt} width="100%" height="400px" />
            </div>
        </ImagenCoach1>
    )
}
