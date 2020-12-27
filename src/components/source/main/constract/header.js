import React from "react"
import {Row, Col , Button} from "react-bootstrap"
import styled from "styled-components"
// ----------- Todo
import {useTodo} from "../../../../context"

const Footer = () => {

    const {todo , dispatch} = useTodo();

    return (
            <Row>
                <Col>
                    <Header  todo={todo} className="header">
                        <h1>Delivery<span>Center</span></h1>
                        <Button variant="outline-secondary">Secondary</Button>
                    </Header>
                </Col>
            </Row>
    )
}

const Header = styled.div`
    width : 100%;
    margin-bottom : 30px;
    display : flex;
    justify-content : space-between;
    align-items: center;
    h1{
        font-size : ${({theme}) => theme.fontSize.xl};
        color : ${({theme,todo}) => eval("theme."+todo.design.theme+".text.grey")};
        span {
            color : ${({theme,todo})=> eval("theme."+todo.design.theme+".text.grey4")};
        }
    }

    button {
        color : ${({theme,todo}) => eval("theme."+todo.design.theme+".text.grey")};
        border : 1px solid ${({theme,todo}) => eval("theme."+todo.design.theme+".text.grey2")};
    }
`;


export default Footer;