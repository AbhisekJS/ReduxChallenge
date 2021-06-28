import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>,
	</Provider>,
	rootElement
);
