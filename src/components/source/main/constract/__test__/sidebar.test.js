import React from "react"
// import {render , unmountComponentAtNode} from "react-dom"
// import {act} from "react-dom/test-utils";
import renderer from "react-test-renderer"
// -------------- Context
import Context from "../../../../../context"
// -------------- Styled
import { ThemeProvider } from "styled-components"
import theme from "../../../theme/theme"
// -------------- Component 
import Sidebar from "../sidebar"
// -------------- Todo
// import todo from "../../../../../context/todos"


// let container = null
// beforeEach(() => {
//     container = document.createElement("div")
//     document.body.appendChild(container)
// })

// afterEach(() => {
//     unmountComponentAtNode(container)
//     container.remove()
//     container = null
// })

test("Component : /constract/sidebar.js" , () => {
    const container = renderer.create(<Context>
        <ThemeProvider theme={theme}>
            <Sidebar />
        </ThemeProvider>
    </Context>)
        let tree = container.toJSON();
        expect(tree).toMatchSnapshot();
        // tree.children[0].children[0].props.onClick()
})