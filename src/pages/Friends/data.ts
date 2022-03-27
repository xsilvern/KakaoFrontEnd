import { List } from "@mui/material";
import axios from "axios";
import { useState, ChangeEvent, CSSProperties, useEffect } from "react";
type FriendType = {
  id: bigint;
  userId: bigint;
  friendId: bigint;
  friendUser: UserType;
};
type UserType = {
  id: bigint;
  phone: string;
  name: string;
  statusMessage: string;
  myfriends: UserType[];
};
const data = () => {
  const [friends, setfriends] = useState<FriendType[]>([]);
  const [loginUserFriends, setLoginUserFriends] = useState<UserType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [loginUser, setLoginUser] = useState<UserType>();
  const readTodos = async () => {
    const uData = await axios.get("http://localhost:5000/users");
    const fData = await axios.get("http://localhost:5000/friends");
    setfriends(fData.data);
    setUsers(uData.data);
    users.map((user) => {
      if (user.id == user.id) {
        setLoginUser(loginUser);
      }
    });
    loginUser && setLoginUserFriends(loginUser.myfriends);
  };

  useEffect(() => {
    readTodos();
  }, [friends, users]);
  return friends;
};
export default data;
