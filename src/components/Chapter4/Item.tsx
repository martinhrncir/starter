import * as React from "react"
import {
    Button,
} from "@reglendo/mergado-ui-kit"
import {
    IconClose,
    IconCheck,
} from "@reglendo/mergado-ui-icons"
import css from "@reglendo/cxs/component"

export interface Props {
    children?: any
    done?: boolean
    removeItem?: (any) => void
    setItemDone?: (any) => void
}

export interface State {
}

export default class Item extends React.Component<Props, State> {

    render() {
        const { done, children, removeItem, setItemDone } = this.props
        return (
            <ItemStyled done={done}>
                {children}
                {removeItem !== undefined &&
                    <Button size="smaller" color="red" onClick={removeItem}><IconClose /></Button>
                }
                {setItemDone  !== undefined &&
                    <Button size="smaller" color="green" onClick={setItemDone}><IconCheck /></Button>
                }
            </ItemStyled>

        );
    }
}

const ItemStyled = css("li")(props => ({
    padding: "10px",
    margin: 0,
    color: props.done ? "green" : "black",
    "& .muk-button": {
        padding: "2px 10px",
        float: "right",
        marginRight: "5px",
    }

}))
