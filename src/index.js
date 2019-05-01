import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducer";

import App from './App';

const rootElement = document.getElementById('root');

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);