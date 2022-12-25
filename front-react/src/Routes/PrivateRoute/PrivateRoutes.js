import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LANG, LangContext } from "../../Context/langContext";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";

function PrivateRoute(props) {
  const token = useSelector((state) => state.auth.token);
  const lang = useSelector((state) => state.setting.lang);
  const user = useSelector((state) => state.auth.user);
  if (token) {
    return (
      <LangContext.Provider value={LANG[lang]}>
        <Navbar className={"navbar px-16 flex"} />

        <div className="page-content p-16">{props.role===user.role || !props.role ? props.component :null}</div>
        <Footer />
      </LangContext.Provider>
    );
  } else {
    return <Navigate to={"/"} replace />;
  }
}
export default PrivateRoute;
