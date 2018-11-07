import * as React from "react"
import css from "@reglendo/cxs/component"
import Divider from "./Divider"

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <AppStyles className="app">
                <Divider divisioner={10} divisor={3} />
            </AppStyles>
        );
    }
}


const AppStyles = css("div")({
    padding: "20px",
    border: "5px solid red",
})


