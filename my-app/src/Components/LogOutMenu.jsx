import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";

function LogOutMenu({ phoneNo }) {
  const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);
  return (
    <Menu>
      <MenuButton
        style={{
          border: "0px solid black",
          width: "170px",
          marginTop: "5px",
          marginLeft: "-35px",
          backgroundColor: "#eef4ff",
          borderRadius: "10px",
          height: "35px",
        }}>
        User +91 <span>{phoneNo}</span>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <b>Your Account</b>
        </MenuItem>
        <MenuItem>Order</MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
export default LogOutMenu;
