import * as React from "react"
import "./../assets/scss/App.scss"
import MojePrvniKomponenta from "./MojePrvniKomponenta"
export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <div className="app">
                <MojePrvniKomponenta delenec={10} delitel={5} />
            </div>
        )
    }
}
