import React from "react"
import renderer from "react-test-renderer"
// -------------- Context
import Context from "../../../../../context.js"
// -------------- Styled
import {ThemeProvider} from "styled-components"
import theme from "../../../theme/theme"
// -------------- Conponent
import Header from "../header"


test('component : constract/header.js', () => {
    const container = renderer.create(<Context>
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    </Context>)

    let tree = container.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0].children[1].children[0]).toEqual("Secondary")
})
