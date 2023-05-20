import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import AddToy from '../pages/AddToy';
import Blogs from '../pages/Blogs';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allToys',
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/toys')
        },
        {
            path: '/myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
    ]
  },
]);

export default router;