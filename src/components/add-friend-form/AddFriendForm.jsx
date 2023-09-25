import { useState } from "react";
import FriendsList from "../friends-list/FriendsList";
import styles from "./AddFriendForm.module.css";

function AddFriendsForm({ friendsData, newFriendHandler }) {
  const [addFriend, setAddFriend] = useState(false);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("https://i.pravatar.cc/50");

  const addFriendHandler = () => {
    setAddFriend((prev) => !prev);
  };

  const cancelFriendHandler = () => {
    setAddFriend((prev) => !prev);
  };

  const friendSubmitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please provide proper name!");
      return;
    }

    const newFriendData = {
      id: crypto.randomUUID(),
      name,
      imgUrl: `${icon}?u=${crypto.randomUUID()}`,
      balance: 0,
    };

    newFriendHandler(newFriendData);

    setName("");
    setAddFriend(false);
  };

  return (
    <>
      {addFriend ? (
        <form className={styles.newFriendForm} onSubmit={friendSubmitHandler}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="icon" className={styles.label}>
            Icon
          </label>
          <br />
          <input
            disabled
            type="text"
            id="icon"
            value={icon}
            className={styles.input}
          />

          <div className={styles.formBtnContainer}>
            <button
              className={styles.cancelFriendBtn}
              onClick={cancelFriendHandler}
            >
              Cancel
            </button>

            <button type="submit" className={styles.addFriendBtn}>
              Add Friend
            </button>
          </div>
        </form>
      ) : (
        <button className={styles.btn} onClick={addFriendHandler}>
          "Add new friend"
        </button>
      )}
    </>
  );
}

export default AddFriendsForm;
