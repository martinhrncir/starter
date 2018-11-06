import * as React from "react"
import "./../assets/scss/App.scss"

const reactLogo = require("./../assets/img/react_logo.svg")
import Delic from "./Delic"

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <div className="app">
                <Delic delenec={10} delitel={3} />
            </div>
        );
    }
}
