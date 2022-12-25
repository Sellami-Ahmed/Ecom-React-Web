import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoute(props){
    const token=useSelector(state=>state.auth.token);
    if (token){
        return <Navigate to={'/dashbord'} replace/>
    }
    else{
        return props.component
    }
}
export default PublicRoute;