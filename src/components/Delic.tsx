import * as React from "react"
import Chyba from "./Chyba"
import Vysledek from "./Vysledek"

interface Props {
    delenec: number
    delitel: number
}

interface State {
    vysledek: number
    nejde: boolean
}

class Delic extends React.PureComponent<Props,State> {

    constructor(props) {
        super(props)

        const {delenec, delitel} = props
        const vysledek = delenec / delitel
        this.state = {
            vysledek,
            nejde: delitel === 0,
        }
    }

    render() {
        const { vysledek, nejde } = this.state
        const {delenec, delitel} = this.props
        if(nejde) {
            return <Chyba>Co mi to děláš?</Chyba>
        }
        return <Vysledek delenec={delenec} delitel={delitel} vysledek={vysledek} /> 	
     }
}

export default Delic