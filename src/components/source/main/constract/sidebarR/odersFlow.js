import React from 'react'
import styled from "styled-components"
import {Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarked} from "@fortawesome/free-solid-svg-icons"
import s from "../../../../../store.json"

export default function OdersFlow() {
    const data = [1,2];
    return (
        <Oderflow>
            <div className="title">Oders<span>Flow</span></div>
            <div className="allCarda">
                {
                    data.map((item , index) => {
                        return (
                            <div className="cardM" key={index}>
                                <div className="header">
                                    <div className="logo">B</div>
                                    <div className="users">
                                        <div className="user">
                                            <img src={`${s.client}/files/pic/user/3.png`} alt="user" />
                                        </div>
                                        <div className="user">
                                            <img src={`${s.client}/files/pic/user/4.png`} alt="user" />
                                        </div>
                                        <div className="user">
                                            <img src={`${s.client}/files/pic/user/1.png`} alt="user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="location">
                                        <h3>South Brookly</h3>
                                        <p><FontAwesomeIcon icon={faMapMarked} /> 1945 frederick street</p>
                                    </div>
                                    <Button variant="warning" size="sm">ON THE WAY</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Oderflow>
    )
}

const Oderflow = styled.div`
    display : flex;
    flex-direction:column;
    width : 100%;
    padding: 20px;
    flex:1;
    .title {
        margin: 35px 0px;
        color: black;
        width: 100%;
        font-weight: 500;
        font-size: 20px;
        span {
            color : #d4d4d4;
        }
    }
    .allCarda {
        display : flex;
        flex-direction : column;
        .cardM{
            display : flex;
            flex-direction:column;
            background : white;
            padding : 20px;
            margin:10px 0px;
            .header {
                display : flex;
                justify-content:space-between;
                width : 100%;
                .logo{
                    width: 40px;
                    height: 40px;
                    background: #ffb100;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    font-weight: 500;
                    color: #ffffff;
                    border-radius: 10px;
                }
                .users {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    .user {
                        margin:0px -5px;
                        img {
                            width : 35px;
                            height : 35px;
                        }
                    }
                }

            }

            /* --------- Body CardM ----------------*/
            .body{
                margin-top: 20px;
                display : flex;
                justify-content: space-between;
                align-items: center;
                .location{
                    color : black;
                    h3{
                        font-size: 16px;
                    }
                    p{
                        color: #a9a9a9;
                        font-size: 10px;
                        svg {

                        }
                    }
                }

                button {
                    color: #f163a4;
                    background: #fdf26e;
                }
            }
        }
    }
`;
