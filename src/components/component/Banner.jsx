import React from 'react'
import styled from '@emotion/styled'

const Imagen = styled.div`
    box-shadow: 0px 10px 0px 0px rgba(56,56,56,0.09);
    margin-top: 1rem;
    width: 100%;

    img{
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        height: 600px;

        @media (max-width: 350px) {
            height:300px;
        }
        @media (max-width: 550px) {
            height:400px;
        }
        @media (max-width: 750px) {
            height:500px;
        }
    }
`


export const Banner = () => {
    return (
        <>
            <Imagen>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./images/imagen.jpeg" alt="full gym"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./images/imagen2.jpeg" alt="FullGym" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./images/imagen3.jpeg" alt="fullgym"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Imagen>
        </>
    )
}
