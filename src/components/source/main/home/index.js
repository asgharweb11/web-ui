import React from "react"
import { Button, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import {
    useParams
} from "react-router-dom"
// -------- Context
import {useTodo} from "../../../../context"
import {SIDEBAR_R} from "../../../../context/types"
// --------Components 
import Banner from "./banner"
import Card from "./card"
import s from "../../../../store.json"


const Home = () => {

    const {todo , dispatch} = useTodo()
    const { id } = useParams();

    const data = [
        {
            title : "Quttor Formaggi",
            time : "30-35",
            price : "55.35",
            location : "brooklyn",
            date : "4:00",
            pic : `./files/pic/post/1.jpg`
        },
        {
            title : "Frutti di mare",
            time : "15-20",
            price : "45.00",
            location : "manhattan",
            date : "5:10",
            pic : `./files/pic/post/2.jpg`
        },
        {
            title : "Marinara",
            time : "30.35",
            price : "55.35",
            location : "brooklyn",
            date : "6:15",
            pic : `./files/pic/post/3.jpg`
        }
    ]

    const handleMove = () => {
        const close = "translate(285px , 0px)";
        dispatch({type : SIDEBAR_R , payload : close})
    }

    return (
        <Row onClick={handleMove}>
            <Col xs={12}>
                <Banner />
            </Col>
            <StyleCard xs={12}>
                <Card data={data} />
            </StyleCard>
        </Row>
    )
}

const StyleCard = styled(Col)`
    width : 100%;
    overflow-x : auto;
`; 


export default Home;