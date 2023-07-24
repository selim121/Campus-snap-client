import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home"
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import UserProfile from "../pages/UserProfile/UserProfile";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import MyCollege from "../pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/admission-form/:id',
                element: <PrivateRoute><AdmissionForm /></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>
            },
            {
                path: '/my-colleges',
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/my-profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;