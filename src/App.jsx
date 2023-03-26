import React from 'react'
import Home from './pages/Home'
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
		element: <h1>about</h1>
	},
	{
		path: '/404',
		element: <h1>404</h1>
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