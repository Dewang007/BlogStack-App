import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e2fee2",
        color: "#2a2b2a",
        py: 3, // Reduced padding
        borderTop: "1px solid #c1e8c1",
        // position: "sticky", // Changed to sticky
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it's above other content
        "& a:hover": {
          color: "#1a8870",
        },
        "& .MuiIconButton-root:hover": {
          backgroundColor: "rgba(42, 43, 42, 0.08)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {" "}
          {/* Reduced spacing */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BlogStack is a platform for writers and readers to connect, share
              ideas, and explore new perspectives.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Blog Street, Write City, 12345
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@blogstack.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <IconButton aria-label="Facebook" color="primary">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary">
              <Instagram />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://blogstack.com/">
              BlogStack
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
