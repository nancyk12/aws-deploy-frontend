import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './Factory/Spinner/Spinner';
import checkTokenAuth from './lib/checkTokenAuth';

checkTokenAuth(store);

const Application = () => {
    return (
        <Provider store={store}>
            <Router>
                <React.Suspense fallback={<Spinner />}>
                    <App store={store}/>
                </React.Suspense>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
