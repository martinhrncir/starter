import * as React from "react"
import "./../assets/scss/App.scss"

import Divider from "./Divider"

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <div className="app">
                <Divider divisioner={10} divisor={3} />
            </div>
        );
    }
}
