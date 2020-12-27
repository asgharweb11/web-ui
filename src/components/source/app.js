import React from "react"
import {Container , Row} from "react-bootstrap"
import { ThemeProvider } from "styled-components"
import {
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom"
import Layout from "./main/layout"
import Home from "./main/home"
import About from "./main/about"
import Dashboard from "./main/dashboard"
// -------- Theme Styles
import theme from "./theme/theme"
// ---------- Store
import s from "../../store.json"

const App = () => {
    console.log("client : " , s.client)
    return (
        <ThemeProvider theme={theme}>
            <Container fluid>
                <Row>
                    <Layout>
                        <Switch>
                            hello
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path={`/dashboard`} component={Dashboard}/>
                            <Route path={`/*`} component={NoMatch} />
                        </Switch>
                    </Layout>
                </Row>
            </Container>
        </ThemeProvider>
        
        
    )
}

const NoMatch = () => {
    const location = useLocation();
    return (
        <div>
            <h3>
            No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default App;