import React from 'react'
import styled from "styled-components"
// ---------- Components 
import Header from "./sidebarR/header"
import OdersFlow from "./sidebarR/odersFlow"
import Footer from "./sidebarR/footer"

export default function sidebarR() {
    return (
        <Sidebar>
            <Header />
            <OdersFlow />
            <Footer />
        </Sidebar>
    )
}

const Sidebar = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    flex:1;
    height: 100vh;
    .header{
        display : flex;
        justify-content:space-between;
        align-items:center;
        position : relative;
        .picSidebar{
            width:100%;
        }
        .detail {
            position: absolute;
            top: 0;
            width: 100%;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width : 50px;
                height:50px;
                border-radius:10px;
            }
            .other {
                display:flex;
                .icon {
                    margin: 0px 5px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                svg {
                    color: white;
                    font-size: 18px;
                }
            }
        }
        
    }
`;
