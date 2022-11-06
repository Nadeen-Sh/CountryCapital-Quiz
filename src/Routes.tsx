import { Routes, Route, Link } from 'react-router-dom';
import Questions from './components/Questions';
import FinalResult from './components/FinalResult';

const Routers = (props: any) => {
	return (
		<Routes>
			<Route path='/' element={<Questions />} />
			<Route path='/result' element={<FinalResult />} />
		</Routes>
	);
};

export default Routers;
