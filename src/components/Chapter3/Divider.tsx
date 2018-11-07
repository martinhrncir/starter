import * as React from "react"
import Error from "./Error"
import Result from "./Result"

interface Props {
    divisioner: number
    divisor: number
}

interface State {
    result: number
    cantDo: boolean
}

class Divider extends React.PureComponent<Props,State> {

    constructor(props) {
        super(props)

        const {divisioner, divisor} = props
        const result = divisioner / divisor
        this.state = {
            result,
            cantDo: divisor === 0,
        }
    }

    render() {
        const { result, cantDo } = this.state
        const {divisioner, divisor} = this.props
        if(cantDo) {
            return <Error>Co mi to děláš?</Error>
        }
        return <Result divisioner={divisioner} divisor={divisor} result={result} />
     }
}

export default Divider