import Sidebar from "@/components/sidebar/sidebar";
import Login from "./login/page";

const AuthLogin = () => {
  return (
    <div className="d-flex">
    <Sidebar />
    <Login />
    </div>
  )
};
export default AuthLogin