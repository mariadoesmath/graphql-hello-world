import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import giphy from './redux/giphy';

const store = createStore(giphy);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
