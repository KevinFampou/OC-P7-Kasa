import React from 'react'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import About from './pages/About'
import Lodging from './pages/Lodging'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: "/lodging/:id",
		element: <Lodging />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '*',
		element: <Error404 />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;