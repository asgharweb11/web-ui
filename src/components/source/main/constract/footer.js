import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
// ------- Context --------
import {useTodo} from "../../../../context"
import s from "../../../../store.json"

const users = [
    {name : "Jessica" , mod : "supplies" , pic : `${s.client}/files/pic/user/1.png`},
    {name : "Martha" , mod : "Cook" , pic : `${s.client}/files/pic/user/2.png`},
    {name : "Sofia" , mod : "Driver" , pic : `${s.client}/files/pic/user/3.png`},
    {name : "jan" , mod : "marjting" , pic : `${s.client}/files/pic/user/4.png`},
    {name : "Jessica" , mod : "Cook" , pic : `${s.client}/files/pic/user/5.jpg`},
    {name : "Mark" , mod : "marjting" , pic : `${s.client}/files/pic/user/6.jpg`},
    {name : "jack" , mod : "Cook" , pic : `${s.client}/files/pic/user/7.jpg`},
];

const Footer = () => {
    const {todo , dispatch} = useTodo();
    return (
            <FStyle todo={todo}>
                <div className="card-Profile">
                    {
                        users.map((item , key) => {
                            return (
                                <div className="user" key={key}>
                                    <img src={item.pic} alt="profile user" />
                                    <h3>{item.name}</h3>
                                    <p>{item.mod}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="addUser">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </FStyle>
    )
}


const FStyle = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height : 100px;
    margin-top:60px;
    .card-Profile{
        display: flex;
        flex:1;
        justify-content: space-between;
        align-items:center;
        .user{
            padding:10px;
            text-align:center;
            img {
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
                border-radius:20px;
            }
            h3{
                color: ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text)};
                font-size: ${({theme}) => theme.fontSize.md};
                margin: 0;
            }
            p{
                font-size: ${({theme}) => theme.fontSize.sm};
                margin: 0;
                color: ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text2)};
            }
        }
    }
    .addUser{
        padding: ${({theme}) => theme.px.p6};
        width: 100%;
        flex: 0;
        height: 100%;
        background: ${({theme , todo}) => eval("theme."+todo.design.theme+".glass."+todo.design.text5)};
        color : ${({theme , todo}) => eval("theme."+todo.design.theme+".text."+todo.design.text)};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
        border-radius: ${({theme}) => theme.px.p5};
        svg {

        }
    }
`;


export default Footer;