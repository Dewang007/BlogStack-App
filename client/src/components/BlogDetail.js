// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";

// // const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   Container,
//   Paper,
//   CircularProgress,
// } from "@mui/material";

// const labelStyle = { mb: 1, mt: 2, fontSize: "18px", fontWeight: "500" };

// function BlogDetail() {
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState();
//   const [loading, setLoading] = useState(true);
//   const id = useParams().id;
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     setInputs((prevValue) => ({
//       ...prevValue,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const fetchDetails = async () => {
//     const res = await axios
//       .get(`http://localhost:8000/api/blog/${id}`)
//       .catch((err) => console.log(err));

//     const data = res.data;
//     return data;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/myBlogs"));
//   };

//   // useEffect(() => {
//   //   fetchDetails().then((data) => {
//   //     setBlog(data);
//   //     setInputs({
//   //       title: data.blog.title,
//   //       content: data.blog.content,
//   //       image: data.blog.image,
//   //     });
//   //   });
//   // }, [id]);
//   useEffect(() => {
//     fetchDetails().then((data) => {
//       setBlog(data);
//       setInputs({
//         title: data.blog.title,
//         content: data.blog.content,
//         image: data.blog.image,
//       });
//       setLoading(false);
//     });
//   }, [id]);

//   const sendRequest = async () => {
//     const res = await axios
//       .put(`http://localhost:8000/api/blog/update/${id}`, {
//         title: inputs.title,
//         content: inputs.content,
//         image: inputs.image,
//       })
//       .catch((err) => console.log(err));

//     const data = await res.data;
//     return data;
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     // <div>
//     //   {inputs && (
//     //     <form onSubmit={handleSubmit}>
//     //       <Box
//     //         border={2}
//     //         borderColor="secondary.main"
//     //         borderRadius={10}
//     //         boxShadow="10px 10px 20px #ccc"
//     //         padding={3}
//     //         margin={"auto"}
//     //         marginTop={5}
//     //         display="flex"
//     //         flexDirection={"column"}
//     //         width={"70%"}
//     //       >
//     //         <Typography
//     //           fontWeight={"bold"}
//     //           padding={3}
//     //           color="gray"
//     //           variant="h3"
//     //           textAlign={"center"}
//     //         >
//     //           Create your Blog
//     //         </Typography>
//     //         <InputLabel sx={labelStyle}>Title</InputLabel>
//     //         <TextField
//     //           name="title"
//     //           onChange={handleChange}
//     //           value={inputs.title}
//     //           margin="normal"
//     //           variant="outlined"
//     //         />
//     //         <InputLabel sx={labelStyle}>Content</InputLabel>
//     //         <TextField
//     //           name="content"
//     //           onChange={handleChange}
//     //           value={inputs.content}
//     //           margin="normal"
//     //           variant="outlined"
//     //         />
//     //         <InputLabel sx={labelStyle}>ImageURL</InputLabel>
//     //         <TextField
//     //           name="image"
//     //           onChange={handleChange}
//     //           value={inputs.image}
//     //           margin="normal"
//     //           variant="outlined"
//     //         />
//     //         <Button
//     //           sx={{ mt: 2, borderRadius: 4 }}
//     //           variant="contained"
//     //           color="warning"
//     //           type="submit"
//     //         >
//     //           Submit Blog
//     //         </Button>
//     //       </Box>
//     //     </form>
//     //   )}
//     // </div>
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//         <Typography
//           variant="h4"
//           component="h1"
//           gutterBottom
//           sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}
//         >
//           Edit Your Blog
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <TextField
//               label="Title"
//               name="title"
//               onChange={handleChange}
//               value={inputs.title}
//               variant="outlined"
//               fullWidth
//               InputProps={{ sx: { borderRadius: 2 } }}
//             />
//             <TextField
//               label="Content"
//               name="content"
//               onChange={handleChange}
//               value={inputs.content}
//               variant="outlined"
//               multiline
//               rows={6}
//               fullWidth
//               InputProps={{ sx: { borderRadius: 2 } }}
//             />
//             <TextField
//               label="Image URL"
//               name="image"
//               onChange={handleChange}
//               value={inputs.image}
//               variant="outlined"
//               fullWidth
//               InputProps={{ sx: { borderRadius: 2 } }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 py: 1.5,
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 "&:hover": {
//                   boxShadow: 4,
//                 },
//               }}
//             >
//               Update Blog
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default BlogDetail;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  CircularProgress,
  styled,
} from "@mui/material";

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create(["box-shadow"]),
    "&:hover": {
      boxShadow: "0 0 0 2px rgba(0,0,0,0.05)",
    },
    "&.Mui-focused": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "none",
  transition: theme.transitions.create(["background-color", "box-shadow"]),
  "&:hover": {
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
}));

function BlogDetail() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  const handleChange = (event) => {
    setInputs((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs"));
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data);
      setInputs({
        title: data.blog.title,
        content: data.blog.content,
        image: data.blog.image,
      });
      setLoading(false);
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:8000/api/blog/update/${id}`, {
        title: inputs.title,
        content: inputs.content,
        image: inputs.image,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

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

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: "text.primary",
          mb: 4,
          textAlign: "center",
          letterSpacing: "-0.5px",
        }}
      >
        Edit Your Blog
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="Title"
          name="title"
          onChange={handleChange}
          value={inputs.title}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Content"
          name="content"
          onChange={handleChange}
          value={inputs.content}
          variant="outlined"
          multiline
          rows={6}
          fullWidth
        />
        <StyledTextField
          label="Image URL"
          name="image"
          onChange={handleChange}
          value={inputs.image}
          variant="outlined"
          fullWidth
        />
        <StyledButton
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Update Blog
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default BlogDetail;
