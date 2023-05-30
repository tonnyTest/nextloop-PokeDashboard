import { createElement, Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
			<Routes>
				{routes.publicRoutes.map((route, index) => (
					<Fragment key={index}>
						<Route
							path={route.path}
							element={createElement(route.component)}
						/>
					</Fragment>
				))}
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;


{/* <div className='input-group'>
<p className='label'>BOARD BASIS</p>
{pokeTypes?.map((pokeType) => 
  {
	return (
	pokeType.types.map(data => (
	  <CheckboxProton
		key={data.type.id}
		typeData={data}
		changeChecked={changeChecked}
	  />
	))
)}
 
)}
</div> */}