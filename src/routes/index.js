import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import {Route} from "react-router-dom";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HocPage from "../containers/HomeTemplate/HocPage";
import HooksPage from "../containers/HomeTemplate/Hooks";
const routesHome = [
    //Home
    {
        exact:true,
        path: "/",
        component: HomePage,
    },
    //About
    {
        exact: false,
        path:"/about",
        component: AboutPage,
    },
    //ListMovie
    {
        exact: false,
        path:"/list-movie" ,
        component: ListMoviePage,
    },
    {
        exact:false ,
        path:"/detail/:id" ,
        component: DetailMoviePage,

    },
    //HocPage
    {
        exact:false ,
        path:"/hoc" ,
        component: HocPage,

    },
    //HooksPage
    {
        exact:false ,
        path:"/hooks" ,
        component: HooksPage,

    },
];

const routesAdmin = [];

const renderRoutesHome = () =>{
    return routesHome.map((route,index)=>{
        return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}
export  {renderRoutesHome};