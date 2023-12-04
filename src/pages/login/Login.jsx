import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./login.css";

export default function Login() {
  return (
    <div className={`pb-5 min-h-screen dark:bg-gray-700`} id="login-page">
      <Navbar searchbar={false} to={"/"} textButton={"Back to Home"} />
      <LoginForm />
    </div>
  );
}
