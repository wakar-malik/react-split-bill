import { useState } from "react";
import styles from "./SplitForm.module.css";

function SplitForm({ splitFriend, updatedSplitFriend }) {
  const [billAmount, setBillAmount] = useState(0);
  const [yourContri, setYourContri] = useState(0);
  const [payer, setPayer] = useState("you");

  const friendContribution = +billAmount - +yourContri;

  const onSubmitSplitHandler = (e) => {
    e.preventDefault();

    const splitFriendData = {
      id: splitFriend.id,
      balance: payer === "you" ? -friendContribution : +yourContri,
    };

    updatedSplitFriend(splitFriendData);

    setBillAmount(0);
    setYourContri(0);
    setPayer("you");
  };

  return (
    <>
      {splitFriend && (
        <div className={styles.splitBillContainer}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Split Bill With {splitFriend?.name}
          </h1>
          <form className={styles.splitForm} onSubmit={onSubmitSplitHandler}>
            <label htmlFor="amount" className={styles.label}>
              Total bill Amount
            </label>
            <br />
            <input
              type="number"
              id="amount"
              className={styles.input}
              placeholder="Enter bill amount"
              onChange={(e) => setBillAmount(e.target.value)}
              value={billAmount}
            />
            <br />

            <label htmlFor="yourContri" className={styles.label}>
              Your contribution
            </label>
            <br />
            <input
              type="number"
              id="yourContri"
              className={styles.input}
              placeholder="Enter your contribution"
              value={yourContri}
              onChange={(e) => {
                setYourContri((prev) =>
                  +e.target.value > +billAmount ? prev : e.target.value
                );
              }}
            />
            <br />

            <label htmlFor="friendContri" className={styles.label}>
              Your friend's contribution
            </label>
            <br />
            <input
              disabled
              type="number"
              id="friendContri"
              className={styles.input}
              placeholder="Enter your friend's contribution"
              value={friendContribution}
            />
            <br />

            <label htmlFor="select" className={styles.label}>
              Who is going to pay
            </label>
            <br />
            <select
              id="select"
              className={styles.input}
              value={payer}
              onChange={(e) => setPayer(e.target.value)}
            >
              <option value="you">You</option>
              <option value={splitFriend?.name}>{splitFriend?.name}</option>
            </select>

            <button className={styles.btn} type="submit">
              Split
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SplitForm;
