import React from "react"
import renderer from "react-test-renderer"
// -------- Context
import Context from "../../../../../context.js"
// -------- Styled-ThemeProvider
import {ThemeProvider} from "styled-components"
import theme from "../../../theme/theme"
//--------- Component
import Footer from "../footer"


test('Component : Constract/footer.js', () => {
    const container = renderer.create(<Context>
        <ThemeProvider theme={theme}>
            <Footer />
        </ThemeProvider>
    </Context>)

    let tree = container.toJSON();
    expect(tree).toMatchSnapshot()
})
