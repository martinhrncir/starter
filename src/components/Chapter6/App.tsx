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
import {connect} from "react-redux"
import ThemeProvider from "@reglendo/cxs/ThemeProvider"
import Item from "../Chapter4/Item"
import Input from "../Chapter5/Input"

import {getMergadoFormats} from "../Chapter6/api"

import {
    addItem,
    setItemDone,
    removeItem,
    removeDoneItem,
    changeFormValue,
} from "../Chapter5/reducers"

interface Props {
    items: string[]
    done: string[]
    addItem: (e) => any
    setItemDone: (e) => any
    removeItem: (e) => any
    removeDoneItem: (e) => any
    changeFormValue: (e) => any
    form: string
}


class App extends React.Component<Props, {}> {

    addItem = e => this.props.addItem(this.props.form)
    removeItem = e => this.props.removeItem(this.props.form)
    removeDone = e => this.props.removeDoneItem(this.props.form)
    setItemDone = e => this.props.setItemDone(this.props.form)

    printMergadoFormats = () => getMergadoFormats().then((e) => console.log(e.data))

    render() {
        const { items, done } = this.props
        return (
            <A>
                <ThemeProvider theme={Theme}>
                    <AppStyles className="app">
                    <Button onClick={this.printMergadoFormats}>Get Mergado formats</Button>
                    <br/><br/>
                    <Section >
                        <Grid cols="1fr auto" valign="end" gap="10px">
                            <GridCell>
                                <Input label={"Do:"} />
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



export default connect((state,props) => ({
    items: state.items,
    done: state.done,
    form: state.form,
}), {
    addItem,
    setItemDone,
    removeItem,
    removeDoneItem,
    changeFormValue,
})(App)