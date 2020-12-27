import React from "react"
import {render , unmountComponentAtNode} from "react-dom"
import { act } from "react-dom/test-utils"
// ------------------
import {ThemeProvider} from "styled-components"
import theme from "../../../theme/theme"
// --------- Component
import Banner from "../banner"



let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})


afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("component : home/__test__/banner.test.js " , () => {

    act(() => {
        render(<ThemeProvider theme={theme}><Banner /></ThemeProvider>, container)
    })

    expect(container.querySelector("[data-testid='title']").textContent).toEqual("Prepared Oders Aint Devired Orders")

})
