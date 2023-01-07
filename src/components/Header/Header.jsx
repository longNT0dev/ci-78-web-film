import React from "react";
import { useAuth } from "../../context/AuthContext";

function Header() {
  // Dùng setUser để đăng xuất bằng cách gán setUser(null)
  const { setUser } = useAuth();

  return <div>Header</div>;
}

export default Header;
