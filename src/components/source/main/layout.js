import React , {useState} from "react" 
import Sidebar from "./constract/sidebar"
import Footer from "./constract/footer"
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components"
// ------------- UseContext
import {useTodo} from "../../../context"
// ---- Components 
import Header from "./constract/header"
import SidebarR from "./constract/sidebarR"

const Layout = ({children}) => {

    const {todo , dispatch} = useTodo();
    return (
        <React.Fragment>
            <ColStyle2 todo={todo} md={1} md={1} xs={2}><Sidebar /></ColStyle2>
            <ColStyle todo={todo} lg={8} md={11} xs={10} className="p-5">
                <Header />
                {children}
                <Footer />
            </ColStyle>
            <ColStyle3 todo={todo} xs={3}>
                <SidebarR />
            </ColStyle3>
        </React.Fragment>
    )

}

const ColStyle = styled(Col)`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    background: ${({theme,todo})=> eval("theme."+todo.design.theme+".content")};
    transition : 0.5s ease;
`;

const ColStyle2 = styled(Col)`
    background : ${({theme , todo}) => eval("theme."+todo.design.theme+".main")};
    transition : 0.5s ease;
    /* min-width : 80px; */
`;


const ColStyle3 = styled(Col)`
    padding : 0;
    margin : 0;
    background : #f7f7f7;
    transition : 0.5s ease;
    @media (max-width : ${({theme}) => theme.media.tabletL}){
        position: fixed;
        top: 0;
        right: 0;
        overflow-y: scroll;
        bottom: 0;
        min-width: 285px;
        transform: ${({theme , todo}) => todo.move.sidebarR};
    }
`;

export default Layout;