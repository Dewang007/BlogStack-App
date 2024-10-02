import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Switch,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8), // Add this line
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: "#e2fee2",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#2a2b2a",
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: "#2a2b2a",
  color: "#e2fee2",
  "&:hover": {
    backgroundColor: "#1a1b1a",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#2a2b2a",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2a2b2a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2a2b2a",
    },
    "&:hover fieldset": {
      borderColor: "#2a2b2a",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2a2b2a",
    },
  },
  "& .MuiInputBase-input": {
    color: "#2a2b2a",
  },
  "& .MuiInputLabel-root": {
    color: "#2a2b2a",
  },
}));

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (event) => {
    setInputs((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const sendRequest = async (type = "signin") => {
    const res = await axios
      .post(`http://localhost:8000/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.signin());
        })
        .then(() => {
          navigate("/");
        })
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.signin());
        })
        .then(() => {
          navigate("/");
        })
        .then((data) => console.log(data));
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <StyledPaper elevation={6}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5" sx={{ color: "#2a2b2a" }}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          {isSignup && (
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={inputs.name}
              onChange={handleChange}
            />
          )}
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus={!isSignup}
            value={inputs.email}
            onChange={handleChange}
          />
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={inputs.password}
            onChange={handleChange}
          />
          <StyledButton type="submit" fullWidth variant="contained">
            {isSignup ? "Sign Up" : "Sign In"}
          </StyledButton>
          <Box mt={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={isSignup}
                  onChange={() => setIsSignup(!isSignup)}
                  color="primary"
                />
              }
              label={
                isSignup
                  ? "Already have an account? Sign In"
                  : "New user? Sign Up"
              }
              sx={{ color: "#2a2b2a" }}
            />
          </Box>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default Auth;
