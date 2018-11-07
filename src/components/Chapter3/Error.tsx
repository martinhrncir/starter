import * as React from "react"

interface Props {
    children: any
}

class Chyba extends React.PureComponent<Props,{}> {
    render() {
        const { children } = this.props
        return <span style={{color: "red", fontWeight: "bold"}}>{children}</span>
     }
}

export default Chyba
