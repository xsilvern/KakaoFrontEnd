// import React, { ChangeEvent } from "react";
// //import Button from "./Button";
// //import Title from "./Title";
// import Photo from "./Photo";
// // import logo from "./logo.svg";
// import "./App.css";
// import { KeyboardEvent } from "react";
import { useState } from "react";
// import TodoList from "./TodoList";
// import Test from "./pages/Test";
import { Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import Friends from "./pages/Friends";

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>("friends");

  const changeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  return (
    <section>
      <Box sx={{ pb: 7 }}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={currentTab}>
          <Tab
            icon={<PeopleIcon />}
            label="친구"
            value="freinds"
            onClick={() => changeTab("friends")}
          />
          <Tab
            icon={<ChatIcon />}
            label="채팅"
            value="chats"
            onClick={() => changeTab("chats")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
