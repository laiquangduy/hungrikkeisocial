import React, {useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
function Reply(props) {
  const { reply } = props;
  console.log(reply);
  const [inputComment, setInputComment] = useState("");
  // const handleChange = (e) => {
  //   setInputComment(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   if (inputComment === "") {
  //     console.log("invalid");
  //   }
  //   setInputComment("");
  //   e.preventDefault();

  //   const data = {
  //     postID: postData.postId,
  //     content: inputComment,
  //     commentOf: Cookies.get("userID"),
  //   };
  //   fetch("http://127.0.0.1:8000/api/v1/comments/addComment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <img alt='Remy Sharp' src={reply.replyUserAva ? reply.replyUserAva : "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" } style={{ width: "40px", height: "40px", borderRadius: "50%" }}/>
        </ListItemAvatar>
        <ListItemText
          primary={reply.replyUsername}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", paddingLeft: "4px" }}
                component='span'
                variant='body2'
                color='text.primary'
              >
               
              </Typography>
              {reply.content}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
}

export default Reply;
