import React from "react"
import { render , unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
// ----------------
import {ThemeProvider} from "styled-components"
import theme from "../../../theme/theme"
// ----------------
import Context from "../../../../../context"
import Card from "../card"

let container = null;
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


const data = [
    {
        title : "Quttor Formaggi",
        time : "30-35",
        price : "55.35",
        location : "brooklyn",
        date : "4:00",
        pic : "./files/pic/post/1.jpg"
    },
]

it("Component : home/__test__/card.test.js" , () => {
    act(() => {
        render(
        <Context>
            <ThemeProvider theme={theme}>
                <Card testData={data} />
            </ThemeProvider>
        </Context> , container)
    })
    expect(container.querySelector("[data-testid='title']").textContent).toEqual(data[0].title)
})