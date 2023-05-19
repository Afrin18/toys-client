import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

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