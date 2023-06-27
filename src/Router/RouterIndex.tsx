import { IRoute } from "@/types/types";
import { lazy } from "react";
const Home = lazy(() =>
  import("@/Pages/Home/Home").then((module) => ({ default: module.Home }))
);
const Shop = lazy(() =>
  import("@/Pages/Shop/Shop").then((module) => ({ default: module.Shop }))
);
const ProductPage = lazy(() =>
  import("@/Pages/ProductPage/ProductPage").then((module) => ({
    default: module.ProductPage,
  }))
);
const Basket = lazy(() =>
  import("@/Pages/Basket/Basket").then((module) => ({ default: module.Basket }))
);
const ErrorPage = lazy(() =>
  import("@/Pages/Error/ErrorPage").then((module) => ({
    default: module.ErrorPage,
  }))
);
const Login = lazy(() =>
  import("@/Pages/Auth/Login/Login").then((module) => ({
    default: module.Login,
  }))
);
const SingIn = lazy(() =>
  import("@/Pages/Auth/SingIn/SingIn").then((module) => ({
    default: module.SingIn,
  }))
);

const AboutUs = lazy(() =>
  import("@/Pages/AboutUs/AboutUs").then((module) => ({
    default: module.AboutUs,
  }))
);

const Found = lazy(() =>
  import("@/Pages/Found/Found").then((module) => ({
    default: module.Found,
  }))
);

export const publicRoutes: IRoute[] = [
  {
    path: "/WordOfFlowers/",
    element: <Home />,
  },
  {
    path: "/WordOfFlowers/login",
    element: <Login />,
  },
  {
    path: "/WordOfFlowers/singin",
    element: <SingIn />,
  },
  {
    path: "/WordOfFlowers/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/WordOfFlowers/found",
    element: <Found />,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: "/WordOfFlowers/shop",
    element: <Shop />,
  },
  {
    path: "/WordOfFlowers/shop/:id",
    element: <ProductPage />,
  },
  {
    path: "/WordOfFlowers/basket/",
    element: <Basket />,
  },
  {
    path: "/WordOfFlowers/*",
    element: <ErrorPage />,
  },
];
