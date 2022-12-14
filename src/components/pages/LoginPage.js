import { Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import { sampleUserData } from "../../mockData";
import Layout from "../layout/Layout";

function LoginPage() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        {user ? (
          <Button onClick={() => setUser()}>Log out</Button>
        ) : (
          <>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button
              onClick={() => {
                setUser({ ...sampleUserData, cartCount: 0 });
                navigate("/");
              }}
            >
              Sign In
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
}

export default LoginPage;
