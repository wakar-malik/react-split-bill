import React from "react";
import List from "../list/List";
import styles from "./FriendsList.module.css";
import AddFriendsForm from "../add-friend-form/AddFriendForm";

function FriendsList({ friends, newFriendHandler, getSplitFriend }) {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {friends.map((friend, index) => (
          <List
            friend={friend}
            key={friend.id}
            getSplitFriend={getSplitFriend}
          />
        ))}
      </ul>
      <AddFriendsForm newFriendHandler={newFriendHandler} />
    </div>
  );
}

export default FriendsList;
