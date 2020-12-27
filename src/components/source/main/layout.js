import React from "react" 
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
            <ColStyle2 todo={todo} xs={1}><Sidebar /></ColStyle2>
            <ColStyle todo={todo}  xs={8} className="p-5">
                <Header />
                {children}
                <Footer />
            </ColStyle>
            <ColStyle3 xs={3}>
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
`;


const ColStyle3 = styled(Col)`
    padding : 0;
    margin : 0;
    background : #f7f7f7;
`;

export default Layout;