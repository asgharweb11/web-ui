import React from 'react'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlasses , faDiceOne} from "@fortawesome/free-solid-svg-icons"
import { Button } from 'react-bootstrap';

export default function footer() {
    return (
        <Footer>
            <div className="detail">
                <div className="data">
                    <div className="pizza">
                        <img src="files/pic/detail/pizza.png" alt="Pettza" />
                    </div>
                    <div className="name">
                        <h4>Pastry</h4>
                        <p>Orders Done</p>
                    </div>
                </div>
                <div className="total">
                    <h5>5685</h5>
                    <Button variant="outline-primary">Today</Button>
                </div>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faGlasses} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faDiceOne} />
                    </div>
                </div>
            </div>
            
        </Footer>
    )
}


const Footer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width : 100%;
    padding : 20px;
    .icons{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:center;
        flex: 0.2;
        height: 100px;
        @media (max-width : ${({theme}) => theme.media.laptopM}){
            display : none;
        }
        .icon {
            font-size : 16px;
            display:flex;
            justify-content:center;
            align-items:center;
            height: 100px;
            padding: 10px;
            color: white;

        }
    }

    .detail{
        display : flex;
        flex:1;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dedede;
        border-radius: 10px;
        padding: 10px;
        background: #ff5050;
        width : 100%;
        overflow : hidden;
        .data{
            display : flex;
            justify-content: flex-start;
            align-items: center;
            .pizza {
                width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #ffbc00;
                margin-right: 10px;
                border-radius: 10px;
                img {
                    width : 50%;
                }
            }

            .name {
                color : white;
                h4 {
                    font-size: 16px;
                    margin: 0;
                    font-weight: bold;
                    padding: 0;
                }
                p{
                    color: #d8d8d8;
                    margin: 0;
                }
            }
        }

        .total{
            h5 {
                color : white;
            }
            button {
                border: 1px solid white;
                color: white;
            }
        }
    }
`;