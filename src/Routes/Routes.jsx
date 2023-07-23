import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home"
import Colleges from "../pages/Colleges/Colleges";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/colleges',
                element: <Colleges />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;