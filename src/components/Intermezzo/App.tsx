import * as React from "react"
import "./../assets/scss/App.scss"
import css from "@reglendo/cxs/component"

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <AppStyles className="app">
                Hello world
            </AppStyles>
        );
    }
}

const AppStyles = css("div")({
    padding: "20px",
    border: "5px solid red",
})

