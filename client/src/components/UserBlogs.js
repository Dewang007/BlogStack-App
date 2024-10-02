import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  CircularProgress,
  Paper,
  Button,
  styled,
} from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: "#e2fee2",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#2a2b2a",
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2a2b2a",
  color: "#e2fee2",
  "&:hover": {
    backgroundColor: "#1a1b1a",
  },
  marginTop: theme.spacing(2),
}));

function MyBlogs() {
  const [user, setUser] = useState();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    if (isLoggedIn) {
      sendRequest().then((data) => {
        setUser(data.user);
        setBlogs(data.user.blogs);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isLoggedIn) {
    return (
      <StyledContainer maxWidth="md">
        <StyledPaper elevation={3}>
          <StyledTypography variant="h4" component="h1">
            Welcome to BlogStack
          </StyledTypography>
          <Typography variant="body1" align="center" paragraph>
            To view your blogs or create new ones, please log in or sign up.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <StyledButton component={Link} to="/auth" variant="contained">
              Sign Up
            </StyledButton>
          </Box>
        </StyledPaper>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer maxWidth="lg">
      <StyledPaper elevation={3}>
        <StyledTypography variant="h4" component="h1">
          Your Blogs
        </StyledTypography>
        {blogs && blogs.length > 0 ? (
          <Grid container spacing={4}>
            {blogs.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Blog
                  id={blog._id}
                  isUser={true}
                  title={blog.title}
                  content={blog.content}
                  image={blog.image}
                  userName={user.name}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" align="center">
            You haven't created any blogs yet.
          </Typography>
        )}
      </StyledPaper>
    </StyledContainer>
  );
}

export default MyBlogs;
