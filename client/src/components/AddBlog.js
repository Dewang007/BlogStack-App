// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";

// const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

// const AddBlog = () => {
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     title: "",
//     content: "",
//     image: "",
//   });

//   const handleChange = (event) => {
//     setInputs((prevValue) => ({
//       ...prevValue,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const sendRequest = async (type = "signin") => {
//     const res = await axios
//       .post("http://localhost:8000/api/blog/add", {
//         title: inputs.title,
//         content: inputs.content,
//         image: inputs.image,
//         user: localStorage.getItem("userId"),
//       })
//       .catch((err) => console.log(err));

//     const data = await res.data;
//     return data;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/"));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={2}
//           borderColor="secondary.main"
//           borderRadius={10}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin={"auto"}
//           marginTop={5}
//           display="flex"
//           flexDirection={"column"}
//           width={"70%"}
//         >
//           <Typography
//             fontWeight={"bold"}
//             padding={3}
//             color="gray"
//             variant="h3"
//             textAlign={"center"}
//           >
//             Create your Blog
//           </Typography>
//           <InputLabel sx={labelStyle}>Title</InputLabel>
//           <TextField
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//             margin="normal"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyle}>Content</InputLabel>
//           <TextField
//             name="content"
//             onChange={handleChange}
//             value={inputs.content}
//             margin="normal"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyle}>ImageURL</InputLabel>
//           <TextField
//             name="image"
//             onChange={handleChange}
//             value={inputs.image}
//             margin="normal"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
//             color="warning"
//             type="submit"
//           >
//             Submit Blog
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddBlog;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Paper,
  styled,
} from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  // background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
  background: "#e2fee2",
}));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   "& .MuiOutlinedInput-root": {
//     borderRadius: theme.spacing(1),
//     transition: theme.transitions.create(["box-shadow"]),
//     "&:hover": {
//       boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.05)",
//     },
//     "&.Mui-focused": {
//       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//     },
//   },
// }));
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create(["box-shadow"]),
    "&:hover": {
      boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.05)",
    },
    "&.Mui-focused": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
  },
  "& .MuiInputLabel-root, & .MuiOutlinedInput-input": {
    color: "#2a2b2a",
  },
}));

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(1.5, 3),
//   borderRadius: theme.spacing(1),
//   fontWeight: 600,
//   textTransform: "none",
//   boxShadow: "none",
//   transition: theme.transitions.create(["background-color", "box-shadow"]),
//   "&:hover": {
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//   },
// }));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "none",
  backgroundColor: "#2a2b2a",
  color: "#e2fee2",
  transition: theme.transitions.create(["background-color", "box-shadow"]),
  "&:hover": {
    backgroundColor: "#1a1b1a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));
const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (event) => {
    setInputs((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:8000/api/blog/add", {
        title: inputs.title,
        content: inputs.content,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <StyledPaper elevation={3}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#2a2b2a",
            mb: 4,
            textAlign: "center",
            letterSpacing: "-0.5px",
          }}
        >
          Create Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            label="Title"
            variant="outlined"
            fullWidth
            required
          />
          <StyledTextField
            name="content"
            onChange={handleChange}
            value={inputs.content}
            label="Content"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            required
          />
          <StyledTextField
            name="image"
            onChange={handleChange}
            value={inputs.image}
            label="Image URL"
            variant="outlined"
            fullWidth
            required
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit Blog
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default AddBlog;
