import * as React from "react"
import css from "@reglendo/cxs/component"
import {
    App as A,
    Theme,
    Grid,
    GridCell,
    Button,
    Section,
} from "@reglendo/mergado-ui-kit"
import ThemeProvider from "@reglendo/cxs/ThemeProvider"
import {
    IconClose, IconCheck,
} from "@reglendo/mergado-ui-icons"
import Item from "./Item"
import Input from "./Input"
interface Props {
}

interface State {
    items: string[]
    value: string
    done: string[]
}

export default class App extends React.Component<Props, State> {
    state = {
        items: [],
        value: '',
        done: [],
    }

    addItem = e => this.setState(s => ({
                        items: [...s.items, this.state.value ]
                    }))

    getValue = val => {
        this.setState({
            value: val,
        })
    }

    removeItem = e => {
         this.setState(s => {
                        const index = s.items.indexOf(e)
                        const items = [...s.items]
                        items.splice(index,1)
                        return ({
                            items,
                        })})
    }

    removeDone = e => {
         this.setState(s => {
                        const index = s.done.indexOf(e)
                        const done = [...s.done]
                        done.splice(index,1)
                        return ({
                            done,
                        })})
    }

    setItemDone = e => {
        this.setState(s => ({
                        done: [...s.done, this.state.value ]
                    }))
        this.removeItem(e)
    }
    render() {
        const { items, done } = this.state
        return (
            <A>
                <ThemeProvider theme={Theme}>
                    <AppStyles className="app">
                    <Section >
                        <Grid cols="1fr auto" valign="end" gap="10px">
                            <GridCell>
                                <Input label={"Do:"} id="input" getValue={this.getValue} />
                            </GridCell>
                            <GridCell valign="end">
                                <Button size="small" tabIndex="1" onClick={this.addItem}>Add</Button>
                            </GridCell>
                        </Grid>
                    </Section>
                    {items.length > 0 ?
                    <Section>
                                <h5>To do:</h5>
                                <ol>
                                {items.map(o =>  <Item removeItem={this.removeItem} setItemDone={this.setItemDone}>{o}</Item>)}
                                </ol>
                    </Section>
                    : <Section style={{textAlign: "center"}}>
                        <p style={{}}>There's nothing to do, yayyy</p>
                        <iframe style={{zoom: 0.7}} src="https://giphy.com/embed/pa37AAGzKXoek" width="480" height="362" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-fresh-prince-of-bel-air-carlton-pa37AAGzKXoek">via GIPHY</a></p>
                    </Section>
                    }
                    {done.length > 0 &&
                    <Section>
                                <h5>Done:</h5>
                                <ol>
                                {done.map(o =>  <Item done={true} removeItem={this.removeDone}>{o}</Item>)}
                                </ol>
                    </Section>
                    }
                    </AppStyles>
                </ThemeProvider>
            </A>
        )
    }
}


const AppStyles = css("div")({
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
})


