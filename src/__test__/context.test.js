import React from "react"
import renderer from "react-test-renderer"
//--------- Component
import Context from "../context"


test('Component : Constract/footer.js', () => {
    const container = renderer.create(<Context />)

    let tree = container.toJSON();
    expect(tree).toMatchSnapshot()
    console.log(Context)

})
