import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './css/Listing.css'

import App from './App';
import data from './data.json'

let items = JSON.stringify(data)
items = JSON.parse(items)

ReactDOM.render(
	<React.StrictMode>
		<App items={items} />
	</React.StrictMode>,
	document.getElementById('root')
);


