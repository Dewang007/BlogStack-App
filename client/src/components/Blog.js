// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Card,
// //   Avatar,
// //   CardContent,
// //   CardHeader,
// //   Typography,
// //   CardMedia,
// //   Box,
// //   IconButton,
// // } from "@mui/material";
// // import {
// //   DeleteForeverOutlined,
// //   ModeEditOutlineOutlined,
// // } from "@mui/icons-material";
// // import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
//   Box,
//   Avatar,
// } from "@mui/material";
// import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
// import axios from "axios";

// const Blog = ({ title, content, image, userName, isUser, id }) => {
//   const navigate = useNavigate();

//   const handleEdit = (event) => {
//     navigate(`/myBlogs/${id}`);
//   };

//   const deleteRequest = async () => {
//     const res = await axios
//       .delete(`http://localhost:8000/api/blog/${id}`)
//       .catch((err) => console.log(err));
//     const data = res.data;
//     return data;
//   };

//   // const handleDelete = () => {
//   //   deleteRequest().then(() => navigate("/"));
//   // };
//   const handleDelete = () => {
//     deleteRequest()
//       .then(() => navigate("/"))
//       .then(() => navigate("/blogs"));
//   };

//   return (
//     // <div>
//     //   <Card
//     //     sx={{
//     //       width: "50%",
//     //       margin: "auto",
//     //       marginTop: 2,
//     //       padding: 2,
//     //       boxShadow: "5px 5px 10px #ccc",
//     //       ":hover": { boxShadow: "10px 10px 20px #ccc" },
//     //     }}
//     //   >
//     //     {isUser && (
//     //       <Box display={"flex"}>
//     //         <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
//     //           <ModeEditOutlineOutlined color="info" />
//     //         </IconButton>
//     //         <IconButton onClick={handleDelete}>
//     //           <DeleteForeverOutlined color="error" />
//     //         </IconButton>
//     //       </Box>
//     //     )}
//     //     <CardHeader
//     //       avatar={
//     //         <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//     //           {userName && userName.charAt(0)}
//     //         </Avatar>
//     //       }
//     //       title={title}
//     //       subheader=""
//     //     />
//     //     <CardMedia
//     //       component="img"
//     //       height="194"
//     //       image={image}
//     //       alt="Paella dish"
//     //     />
//     //     <CardContent>
//     //       <hr />
//     //       <br />
//     //       <Typography variant="body2" color="text.secondary">
//     //         <b>{userName}</b> {": "}
//     //         {content}
//     //       </Typography>
//     //     </CardContent>
//     //   </Card>
//     // </div>
//     <Card
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         transition: "0.3s",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
//         },
//       }}
//     >
//       <CardMedia component="img" height="200" image={image} alt={title} />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography
//           gutterBottom
//           variant="h5"
//           component="div"
//           sx={{ fontWeight: "bold" }}
//         >
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {content.substring(0, 100)}...
//         </Typography>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
//             {userName.charAt(0)}
//           </Avatar>
//           <Typography variant="body2" color="text.secondary">
//             {userName}
//           </Typography>
//         </Box>
//       </CardContent>
//       {isUser && (
//         <CardActions>
//           <Button size="small" onClick={handleEdit} startIcon={<EditIcon />}>
//             Edit
//           </Button>
//           <Button
//             size="small"
//             onClick={handleDelete}
//             startIcon={<DeleteIcon />}
//             color="error"
//           >
//             Delete
//           </Button>
//         </CardActions>
//       )}
//     </Card>
//   );
// };

// export default Blog;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
<p></p>;

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: "56.25%", // 16:9 aspect ratio
  borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
}));

const Blog = ({ title, content, image, userName, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <StyledCard>
      <Link
        to={`/blog/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <StyledCardMedia image={image} title={title} />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.length > 100 ? content.substring(0, 100) + "..." : content}
          </Typography>
        </StyledCardContent>
        <Box sx={{ mt: "auto", p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            By {userName}
          </Typography>
        </Box>
      </Link>
      {isUser && (
        <CardActions>
          <StyledButton
            size="small"
            onClick={handleEdit}
            startIcon={<EditIcon />}
          >
            Edit
          </StyledButton>
          <StyledButton
            size="small"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
            color="error"
          >
            Delete
          </StyledButton>
        </CardActions>
      )}
    </StyledCard>
  );
};

export default Blog;
