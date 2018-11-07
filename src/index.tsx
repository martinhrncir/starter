import * as React from "react"
import {render} from "react-dom"
import {AppContainer} from "react-hot-loader"
import App from "./components/App"

const rootEl = document.getElementById("app")

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API

declare let module: { hot: any };
if (module.hot) {
    module.hot.accept("./components/App", () => {
        const App = require("./components/App").default;

        render(
            <AppContainer>
                <App/>
            </AppContainer>,
            rootEl
        );
    });
}
