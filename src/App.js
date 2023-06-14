import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Level } from './components/Level/Level';
import { Classe } from './components/Classe/Classe';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Header></Header>
			<Routes>
				<Route path='/level' element={<Level></Level>}></Route>
				<Route path='/classe' element={<Classe></Classe>}></Route> 
			</Routes>
		</React.Fragment>
	);
}

export default App;
