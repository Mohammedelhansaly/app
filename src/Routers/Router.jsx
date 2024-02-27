import { Navigate } from "react-router-dom";
import FullLayout from "../components/fullLayout/FullLayout";
import ListeProject from "../views/Projects/ListProjects/ListeProject";
import ListEquipement from "../views/Equipements/ListEquipement/ListEquipement";
import Profile from "../views/ProfileUser/Profile/Profile";
import EditProfile from "../views/ProfileUser/editProfile/EditProfile";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ForgetPassword from "../views/Auth/ForgetPassword";
import ResetPassrord from "../views/Auth/ResetPassrord";


const ThemeRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgetpass',
        element: <ForgetPassword />
    },
    {
        path: '/resetpass',
        element: <ResetPassrord />
    },
    {
        path: "/",
        element: <FullLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to={'/MesProjets'} />
            },
            {
                path: "/MesProjets",
                element: <ListeProject />
            },
            {
                path: '/ListeEquipements',
                element: <ListEquipement />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/EditProfile',
                element: <EditProfile />
            },


        ]
    }
]

export default ThemeRoutes