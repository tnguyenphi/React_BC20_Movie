import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import { Route } from "react-router-dom";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HocPage from "../containers/HomeTemplate/HocPage";
import HooksPage from "../containers/HomeTemplate/Hooks";
import Dashboard from "../containers/AdminTemplate/DashboardPage";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import AuthPage from "../containers/AdminTemplate/AuthPage";
const routesHome = [
  //Home
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  //About
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  //ListMovie
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  //HocPage
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  //HooksPage
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];

const routesAdmin = [
  //Dashboard
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  //AddUserPage
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];

const renderRoutesHome = () => {
  // return routesHome.map((route, index) => {
  //     return <Route key={index} exact={route.exact} path={route.path} component={route.component} />
  // })
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};
export { renderRoutesHome, renderRoutesAdmin };
