import { useState } from "react";
import FriendsList from "./components/friends-list/FriendsList";
import SplitForm from "./components/split-form/SplitForm";
import styles from "./App.module.css";

const friendsData = [
  {
    id: "1",
    name: "Steven",
    imgUrl: "https://i.pravatar.cc/50?u=a042581f4e29027604d",
    balance: -10,
  },
  {
    id: "2",
    name: "Mark",
    imgUrl: "https://i.pravatar.cc/50?u=a042851f4e29026704d",
    balance: 0,
  },
  {
    id: "3",
    name: "Peter",
    imgUrl: "https://i.pravatar.cc/50?u=a042581f4e20926704d",
    balance: 20,
  },
  {
    id: "4",
    name: "David",
    imgUrl: "https://i.pravatar.cc/50?u=a042581f4e29026740d",
    balance: 100,
  },
];

function App() {
  const [friends, setFriends] = useState(friendsData);
  const [splitFriend, setSplitFriend] = useState(null);

  const newFriendHandler = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
  };

  const getSplitFriend = (splitFriend) => {
    setSplitFriend(splitFriend);
  };

  const updatedSplitFriend = (splitFriendData) => {
    const updateFriends = friends.map((friend) => {
      if (friend.id === splitFriendData.id) {
        friend.balance = friend.balance += splitFriendData.balance;
      }
      return friend;
    });

    setFriends(updateFriends);
  };

  return (
    <div className={styles.container}>
      <FriendsList
        friends={friends}
        newFriendHandler={newFriendHandler}
        getSplitFriend={getSplitFriend}
      />
      <SplitForm
        splitFriend={splitFriend}
        updatedSplitFriend={updatedSplitFriend}
      />
    </div>
  );
}

export default App;
