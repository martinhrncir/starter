import * as React from "react"

interface Props {
    vysledek: number
    delenec: number
    delitel: number
}


class Vysledek extends React.PureComponent<Props,{}> {
    render() {
        const { vysledek, delenec, delitel } = this.props
        return <span>Som podělil {delenec} a {delitel} a vyšlo mi: {vysledek}</span>
     }
}

export default Vysledek