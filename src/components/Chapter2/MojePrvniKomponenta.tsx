import * as React from "react"

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
        if(nejde) {
            return <span>Co mi to děláš?</span>
        }
        return <span>Som podelil a vyslo mi  {vysledek}</span>
     }
}

export default Delic