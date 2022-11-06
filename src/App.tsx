import './App.css';
import Routers from './Routes';
import background from '../src/assests/background.png';

function App() {
	return (
		<div
			className='App'
			style={{
				backgroundImage: `url(${background})`,
				height: '100vh',
				fontSize: '50px',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<Routers />
		</div>
	);
}

export default App;
