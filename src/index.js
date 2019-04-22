import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';


const combineBothReducers = combineReducers({
    name: userReducer,
    product: productReducer
})

const forTheAPICall = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(combineBothReducers, {name: 'Sai Charan', product:[{computer: 'In Store'}]},forTheAPICall);


ReactDOM.render(<Provider store={store}><App aRandomProp="someone"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
