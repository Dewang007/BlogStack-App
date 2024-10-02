import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Avatar,
  Divider,
  CircularProgress,
  Button,
  styled,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import { useSelector } from "react-redux";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  background: "#ffffff",
}));

const BlogImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "24px",
});

const BlogContent = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  fontSize: "1.1rem",
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2a2b2a",
  color: "#e2fee2",
  "&:hover": {
    backgroundColor: "#1a1b1a",
  },
  marginTop: theme.spacing(2),
}));

const ReadBlog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!isLoggedIn) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:8000/api/blog/${id}`
        );
        console.log("Fetched blog data:", response.data);
        setBlog(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, isLoggedIn]);

  const formatBlogDate = (dateString) => {
    if (!dateString) return "Date unavailable";
    try {
      const date = parseISO(dateString);
      return format(date, "MMMM d, yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isLoggedIn) {
    return (
      <Container maxWidth="md" sx={{ my: 4 }}>
        <StyledPaper>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Sign In to Read Blogs
          </Typography>
          <Typography variant="body1" paragraph align="center">
            To read this blog and access all features, please sign in or create
            an account.
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <StyledButton component={Link} to="/auth" variant="contained">
              Sign In / Sign Up
            </StyledButton>
          </Box>
        </StyledPaper>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container maxWidth="md">
        <Typography variant="h5" align="center" mt={4}>
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <StyledPaper>
        <Typography variant="h3" component="h1" gutterBottom>
          {blog.title}
        </Typography>
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar
            src={blog.user?.avatar}
            alt={blog.user.name || "Unknown Author"}
            sx={{ mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1">
              {blog.user?.userName || "Unknown Author"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {formatBlogDate(blog.createdAt)}
            </Typography>
          </Box>
        </Box>
        <BlogImage src={blog.image} alt={blog.title} />
        <BlogContent paragraph>{blog.content}</BlogContent>
        <Divider sx={{ my: 3 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            {blog.tags &&
              blog.tags.map((tag, index) => (
                <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
              ))}
          </Box>
          <Typography variant="body2" color="textSecondary">
            Last updated: {formatBlogDate(blog.updatedAt)}
          </Typography>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default ReadBlog;
