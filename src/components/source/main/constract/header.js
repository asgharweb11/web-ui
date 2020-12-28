import React , {useState} from "react"
import {Row, Col , Button} from "react-bootstrap"
import styled from "styled-components"
// ----------- Todo
import {useTodo} from "../../../../context"
import {SIDEBAR_R} from "../../../../context/types"

const Footer = () => {

    const {todo , dispatch} = useTodo();
    // const [move , setMove] = useState(true)
    const handleSidebarR = () => {
        const open = "translate(0px , 0px)";
        // const close = "translate(285px , 0px)";
        dispatch({type : SIDEBAR_R , payload : open})
        // setMove(!move)
    }

    return (
            <Row>
                <Col>
                    <Header  todo={todo} className="header">
                        <h1>Delivery<span>Center</span></h1>
                        <Button onClick={handleSidebarR} variant="outline-secondary">Secondary</Button>
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