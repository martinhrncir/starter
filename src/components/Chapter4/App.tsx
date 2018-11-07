import * as React from "react"
import css from "@reglendo/cxs/component"
import Input from "./Input"
import {
    App as A,
    theme,
    Grid,
    GridCell,
    Button,
} from "@reglendo/mergado-ui-kit"
import ThemeProvider from "@reglendo/cxs/ThemeProvider"

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {

    render() {
        return (
            <A>
                <ThemeProvider theme={theme}>
                    <AppStyles className="app">
                        <Grid cols="auto auto" valign="end">
                            <GridCell><Input label={"Do:"} /></GridCell>
                            <GridCell valign="end"><Button>Add</Button></GridCell>
                        </Grid>
                    </AppStyles>
                </ThemeProvider>
            </A>
        )
    }
}


const AppStyles = css("div")({
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
})


