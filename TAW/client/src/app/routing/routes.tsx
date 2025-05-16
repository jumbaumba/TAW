import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { LoginPage } from "@pages/login/ui/LoginPage";
import { HomePage } from "@pages/HomePage/HomePage";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import RegistrationPage from "@pages/login/ui/RegistrationPage";
import AttrectionPage from "@pages/AttrectionList/AttrectionPage"

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'registration',
          element: <RegistrationPage />,
        },
        {
          path: 'attrection',
          element: <AttrectionPage />, 
        },
        {
          path: '*',
          element: <NotFoundPage />, 
        }
      ],
    },
  ]);