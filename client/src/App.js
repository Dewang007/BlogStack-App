import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import ReadBlog from "./components/ReadBlog";
import AddBlog from "./components/AddBlog";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.signin());
    }
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensures the content area is at least the full viewport height
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1, // This will make the main content area grow to push the footer down
            py: 3, // Add some padding to the top and bottom
          }}
        >
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Blogs />} />
                <Route path="/myBlogs" element={<UserBlogs />} />
                <Route path="/blog/:id" element={<ReadBlog />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Blogs />} />
                <Route path="/blogs/add" element={<AddBlog />} />
                <Route path="/myBlogs" element={<UserBlogs />} />
                <Route path="/myBlogs/:id" element={<BlogDetail />} />
                <Route path="/blog/:id" element={<ReadBlog />} />
                <Route path="*" element={<div>No match</div>} />
              </>
            )}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
