import { createBrowserRouter } from "react-router-dom";
import { App } from "@app/App";
import { LoginPage } from "@pages/login/ui/LoginPage";
import { HomePage } from "@pages/HomePage/HomePage";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import RegistrationPage from "@pages/login/ui/RegistrationPage";
import AttractionsList from "@pages/AttrectionList/AttrectionList";
import AttractionPage from "@pages/AttrectionPage/AttrectionPage";
import CategoryPage from "@pages/CategoryPage/CategoryPage";

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
          element: <AttractionsList />, 
        },
        {
          path: 'attrection/:id',
          element: <AttractionPage />,
        },
        {
          path: '/categories/:kind',
          element: <CategoryPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />, 
        }
      ],
    },
  ]);