import ReactDOM from "react-dom";

import App from "./components/App";
import withApolloClient from "./apollo";
import * as serviceWorker from "./serviceWorker";

const rootApp = withApolloClient(App);

ReactDOM.render(rootApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
