import * as React from "react"
import "./../assets/scss/App.scss"

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <div className="app">
                Hello World!
            </div>
        )
    }
}
