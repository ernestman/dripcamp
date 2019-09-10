import React from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./app";

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <HashRouter >
                    <App />
                </HashRouter>
            </Provider>
        )
    }
}

export default Root;