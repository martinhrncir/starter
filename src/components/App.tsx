import * as React from "react"
import css from "@reglendo/cxs/component"
import Input from "./Chapter4/Input"
import {
    App as A,
    Theme,
    Grid,
    GridCell,
    Button,
} from "@reglendo/mergado-ui-kit"
import ThemeProvider from "@reglendo/cxs/ThemeProvider"

interface Props {
}

interface State {
    items: string[]
    value: string
}

export default class App extends React.Component<Props, State> {
    state = {
        items: [],
        value: '',
    }

    addItem = e => this.setState(s => ({
                        items: [...s.items, this.state.value ]
                    }))

    getValue = val => {
        this.setState({
            value: val,
        })
    }
    render() {
        const { items } = this.state
        return (
            <A>
                <ThemeProvider theme={Theme}>
                    <AppStyles className="app">
                        <Grid cols="auto auto" valign="end" gap="10px">
                            <GridCell>
                                <Input label={"Do:"} id="input" getValue={this.getValue} />
                            </GridCell>
                            <GridCell valign="end">
                                <Button size="small" tabIndex="1" onClick={this.addItem}>Add</Button>
                            </GridCell>
                            <GridCell col="span / 2">
                                <h5>ToDo:</h5>
                                <ol>
                                {items.map(o =>  <Item>{o}</Item>)}
                                </ol>

                            </GridCell>
                        </Grid>


                    </AppStyles>
                </ThemeProvider>
            </A>
        )
    }
}

const Item = css("li")({

})


const AppStyles = css("div")({
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
})


