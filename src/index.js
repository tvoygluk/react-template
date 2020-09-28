import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";

const composeEnhancers =
    (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        :   compose;

const store = createStore (rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();