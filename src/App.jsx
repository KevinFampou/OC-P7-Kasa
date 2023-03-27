import React from 'react'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: "/apartment/:id",
		element: <h1>apartment</h1>
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