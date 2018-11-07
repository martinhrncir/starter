import * as React from "react"

interface Props {
    result: number
    divisioner: number
    divisor: number
}


class Vysledek extends React.PureComponent<Props,{}> {
    render() {
        const { result, divisioner, divisor } = this.props
        return <span>Som podělil {divisioner} a {divisor} a vyšlo mi: {result}</span>
     }
}

export default Vysledek