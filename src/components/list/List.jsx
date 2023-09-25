import React from "react";
import styles from "./List.module.css";

function List({ friend, getSplitFriend }) {
  return (
    <li className={styles.listItem}>
      <img src={friend.imgUrl} alt="" className={styles.img} />
      <div>
        <p className={styles.name}>{friend.name}</p>
        <p
          className={styles.desc}
          style={{ color: friend.balance < 0 ? "green" : "red" }}
        >
          {friend.balance === 0
            ? ""
            : `${friend.balance < 0 ? `${friend.name}` : `you`} ${
                friend.balance < 0 ? `owes` : `owe`
              } ${Math.abs(friend.balance)}`}
        </p>
      </div>
      <button className={styles.btn} onClick={() => getSplitFriend(friend)}>
        Split
      </button>
    </li>
  );
}

export default List;
