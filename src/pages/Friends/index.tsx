import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  TextField,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import { Box } from "@mui/system";
import data from "./data";
import { Grid } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FriendAdd from "./components/FriendAdd";
import { useState, ChangeEvent, CSSProperties, useEffect } from "react";

const Friends = (): JSX.Element => {
  const [friendList, setFriendList] = useState(data);
  const [open, setOpen] = useState(false);

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(data);
    } else {
      const filteredFriends = data.filter((friend) =>
        friend.name.includes(inputText)
      );
      setFriendList(filteredFriends);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <FriendAdd />
      </Modal>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="친구 검색"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={changeSearchText}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                <PersonAddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        {friendList.map((friend) => (
          <ListItemButton key={friend.id}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={friend.name}
              secondary={friend.statusMessage}
            />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default Friends;
