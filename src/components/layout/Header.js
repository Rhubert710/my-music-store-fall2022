import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";

export default function MenuAppBar() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" bgcolor="red">
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            MyMusicStore.com
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => navigate("/sign-in")}
            >
              {user ? (
                <Avatar
                  alt={`${user.firstName} ${user.lastName}`}
                  src={user.profilePicture}
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartIcon />
            </IconButton>
            <div>{user ? user.cartCount : '0'} items in cart</div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
