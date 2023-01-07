import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  // Sử dụng hàm setUser để đăng nhập
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Hàm đăng nhập khi bấm nút login
  const handleSignin = () => {
    // call api check login, nếu thành công thì setUser = 1 giá trị (tên, id user)
    fetch()
      .then(() => {
        // success

        /** Send them back to the page they tried to visit when they were
      redirected to the login page. Use { replace: true } so we don't create
      another entry in the history stack for the login page.  This means that
      when they get to the protected page and click the back button, they
      won't end up back on the login page, which is also really nice for the
      user experience. */
        navigate(from, { replace: true });
      })
      .catch((err) => {
        // fail
      });
  };

  return <div>LoginPage</div>;
}

export default LoginPage;
