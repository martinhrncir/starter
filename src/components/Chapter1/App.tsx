import * as React from "react"

const Konstanta = 1

function sayHelloLegacy() {
    alert('Hello!')
    return true
}

const sayHelloModern = () => { alert('Hello!'); return true }

const HelloWorld = (
            <h1>
                Hello World!
            </h1>
)

export default HelloWorld
