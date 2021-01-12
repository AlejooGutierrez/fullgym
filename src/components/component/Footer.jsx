import React from 'react'
import styled from '@emotion/styled'

const Foter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgba(0,0,0,0.4);
    @media(max-width: 550px){
        font-size: .7rem;
    }
`
const Images = styled.div`
    display: flex;
    justify-content: space-around;
    
`

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
       <Foter>
           <div className="col-8">Full Gym {year} &copy; Derechos Reservados</div>
           <Images className="col-4">
               <a href="https://www.facebook.com/FullGymClub"><img src="./images/facebook.png" alt="fullgym facebook" width="30px"/></a>
               <a href="https://www.instagram.com/fullgymclub/"><img src="./images/instagram.png" alt="fullgym facebook" width="30px"/></a>
               <a href="https://wa.me/+573197700593"><img src="./images/whatsapp.png" alt="fullgym facebook" width="30px"/> </a>
           </Images>
       </Foter>
    )
}
