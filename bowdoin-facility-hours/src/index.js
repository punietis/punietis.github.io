import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

/* reload page once after page loads */
window.onload = function() {
	//considering there aren't any hashes in the urls already
	if (!window.location.hash) {
		//setting window location
		window.location = window.location + '#loaded';
		//using reload() method to reload web page
		window.location.reload();
	}
};
