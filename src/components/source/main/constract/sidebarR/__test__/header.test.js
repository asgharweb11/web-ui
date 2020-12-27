import React from "react"
import renderer from "react-test-renderer"
// -------- Context
import Context from "../../../../../../context.js"
// -------- Styled-ThemeProvider
import {ThemeProvider} from "styled-components"
import theme from "../../../../theme/theme"
//--------- Component
import Header from "../header"


test('Component : Constract/header.js', () => {
    const container = renderer.create(<Context>
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    </Context>)

    let tree = container.toJSON();
    expect(tree).toMatchSnapshot()
})
