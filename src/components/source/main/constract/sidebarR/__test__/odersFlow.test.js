import React from "react"
import renderer from "react-test-renderer"
// -------- Context
import Context from "../../../../../../context.js"
// -------- Styled-ThemeProvider
import {ThemeProvider} from "styled-components"
import theme from "../../../../theme/theme"
//--------- Component
import OdersFlow from "../odersFlow"


test('Component : Constract/sidebarR/odersFlow.js', () => {
    const container = renderer.create(<Context>
        <ThemeProvider theme={theme}>
            <OdersFlow />
        </ThemeProvider>
    </Context>)

    let tree = container.toJSON();
    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0].children[0].children[0].children[0]).toEqual("B")

})
