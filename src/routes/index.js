import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import {Route} from "react-router-dom"
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
];

const routesAdmin = [];

const renderRoutesHome = () =>{
    return routesHome.map((route,index)=>{
        return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
    })
}
export  {renderRoutesHome};