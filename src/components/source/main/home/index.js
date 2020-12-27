import React from "react"
import { Button, Row, Col } from "react-bootstrap"
import {
    useParams
} from "react-router-dom"
// --------Components 
import Banner from "./banner"
import Card from "./card"


const Home = () => {

    const { id } = useParams();

    const data = [
        {
            title : "Quttor Formaggi",
            time : "30-35",
            price : "55.35",
            location : "brooklyn",
            date : "4:00",
            pic : "./files/pic/post/1.jpg"
        },
        {
            title : "Frutti di mare",
            time : "15-20",
            price : "45.00",
            location : "manhattan",
            date : "5:10",
            pic : "./files/pic/post/2.jpg"
        },
        {
            title : "Marinara",
            time : "30.35",
            price : "55.35",
            location : "brooklyn",
            date : "6:15",
            pic : "./files/pic/post/3.jpg"
        }
    ]

    return (
        <Row>
            <Col xs={12}>
                <Banner />
            </Col>
            <Col xs={12}>
                <Card data={data} />
            </Col>
        </Row>
    )
}


export default Home;