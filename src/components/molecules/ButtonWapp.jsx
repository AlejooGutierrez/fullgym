import React from 'react'
import styled from '@emotion/styled'

const Button = styled.a`
    position:fixed;
	bottom: 40px;
	right: 60px;
    background-color: #ffffff;
    width:80px;
    height: 80px;
    border-radius: 40px;
    @media(max-width:550px){
        bottom: 50px;
        right: 10px;
    }
`

export const ButtonWapp = () => {
    return (
        <Button href="https://wa.me/+573197700593"><img src="./images/whatsapp.png" alt="fullgym Whatsapp" width="80px"/> </Button>
    )
}
