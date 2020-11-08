import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import './index.css';

import stores from './stores';

ReactDOM.render(
    <React.StrictMode>
        <Provider {...stores}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


