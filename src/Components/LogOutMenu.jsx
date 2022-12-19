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
          width: "150px",
          marginTop: "2px",
          marginLeft: "-20px",
          backgroundColor: "#eef4ff",
          borderRadius: "10px",
          height: "38px",

          fontSize: "15px",
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
