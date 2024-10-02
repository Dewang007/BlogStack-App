import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

function Blogs() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  // useEffect(() => {
  //   sendRequest().then((data) => setBlogs(data.blogs));
  // }, []);
  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
      setLoading(false);
    });
  }, []);

  return (
    // <div>
    //   {blogs &&
    //     blogs.map((blog, index) => (
    //       <Blog
    //         id={blog._id}
    //         isUser={localStorage.getItem("userId") === blog.user._id}
    //         title={blog.title}
    //         content={blog.content}
    //         image={blog.image}
    //         userName={blog.user.name}
    //       />
    //     ))}
    // </div>
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        backgroundColor: "#e2fee2",
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          // color: "primary.main",
          color: "#2a2b2a",
          textAlign: "center",
          mb: 4,
        }}
      >
        Latest Blogs
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {blogs &&
            blogs.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id}>
                <Blog
                  id={blog._id}
                  isUser={localStorage.getItem("userId") === blog.user._id}
                  title={blog.title}
                  content={blog.content}
                  image={blog.image}
                  userName={blog.user.name}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  );
}

export default Blogs;
