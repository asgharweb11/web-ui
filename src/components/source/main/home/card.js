import React from "react"
import styled from "styled-components"
// ------- Context --------
import {useTodo} from "../../../../context"
// Icos
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDollarSign , faMapMarkedAlt , faClock} from "@fortawesome/free-solid-svg-icons"

const Card = (props) => {
    const {todo , dispatch} = useTodo();
    const getData = props.data === undefined || null ? props.testData : props.data;

    return (
        <Banner todo={todo}>
            {
                getData.map(({title , time , price , location , date , pic} , key) => {
                    return (
                        <div className="cardM" key={key}>
                            <div className="photo">
                                <p>{time} <span>min</span></p>
                                <img src={pic} alt="banner"/>
                            </div>
                            <div className="content">
                                <h1 data-testid="title">{title}</h1>
                                <div className="others">
                                    <p><FontAwesomeIcon icon={faDollarSign} /> {price} </p>
                                    <p><FontAwesomeIcon icon={faMapMarkedAlt} /> {location} </p>
                                    <p><FontAwesomeIcon icon={faClock} /> {date} </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </Banner>
    )
}

const Banner = styled.div`
    display : flex;
    justify-content: space-around;
    margin-top: 50px;
    .cardM {
        margin: ${({theme}) => theme.px.p1} ${({theme}) => theme.px.p4};
        .photo {
            position: relative;
            p{
                position : absolute;
                top : 0;
                right:0;
                background : white;
                padding : 10px;
                border-top-right-radius : 10px;
                border-bottom-left-radius : 10px;
                font-size : 12px;
            }
            img {
                width : 100%;
                height: 140px;
                border-radius : 10px;
            }

        }

        .content{
            margin-top:${({theme}) => theme.px.p6};
            h1{
                font-size : ${({theme}) => theme.px.p6};
                color : ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text)};
            }
            .others {
                display : flex;
                justify-content: space-between;
                align-items:center;
                p{
                    margin: 0px 5px;
                    font-weight: 500;
                    font-size: 13px;
                    color : ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text2)};
                }
            }
        }
    }
`;

export default Card;