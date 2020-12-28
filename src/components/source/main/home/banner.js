import React from 'react'
import styled from "styled-components"
import {Card, Button} from "react-bootstrap"
// ---------
import s from "../../../../store.json"

export default function Banner() {
    // params {theme} For __TEST__ 
    const local = process.env.LOCAL;
    return (
        <Bheader>
            <Card className="banner">
                <Card.Img className="photo" src={`./files/pic/detail/banner.jpg`} alt="banner" />
                <Card.ImgOverlay className="overlay">
                    <div className="detail">
                        <Card.Body>
                            <Card.Title data-testid='title' >Prepared Oders Aint Devired Orders</Card.Title>
                            <Card.Text data-testid='text' >after orders has been paid and send it can be countend in tn system</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="warning">Read More</Button>
                            <div><p>Aug, 5<span>th</span></p></div>
                        </Card.Footer>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Bheader>
    )
}

const Bheader = styled.div`
    color : white;
    .photo {
        width : 100%;
        height : 300px;
        border-radius : ${({theme}) => theme.px.p3};
        @media (max-width : ${({theme}) => theme.media.tablet}) {
            height : 240px;
        }
    }
    .overlay{
        display : flex;
        justify-content : space-between;
        align-items: center;
        .detail{
            background: #00000063;
            flex: 1;
            border-radius : ${({theme}) => theme.px.p4};
        }
        .card-body{
            p {
                @media (max-width : ${({theme}) => theme.media.tablet}) {
                    display : none;
                }
            }
        }
        .card-footer {
            display : flex;
            justify-content:space-between;
            align-items: center;
            p {
                font-weight : 800;
                span{
                    color:red;
                }
            }
        }
    }


    
`;
