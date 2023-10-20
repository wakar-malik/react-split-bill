import { useState } from "react";
import styles from "./SplitForm.module.css";
import Input from "../input/Input";
import Label from "../label/Label";

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
            <Label htmlFor="amount" className={styles.label}>
              Total bill Amount
            </Label>
            <br />
            <Input
              type="number"
              id="amount"
              className={styles.input}
              placeholder="Enter bill amount"
              onChange={(e) => setBillAmount(e.target.value)}
              value={billAmount}
            />

            <br />

            <Label htmlFor="yourContri" className={styles.label}>
              Your contribution
            </Label>
            <br />
            <Input
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

            <Label htmlFor="friendContri" className={styles.label}>
              Your friend's contribution
            </Label>
            <br />
            <Input
              disabled={true}
              type="number"
              id="friendContri"
              className={styles.input}
              placeholder="Enter your friend's contribution"
              value={friendContribution}
            />
            <br />

            <Label htmlFor="select" className={styles.label}>
              Who is going to pay
            </Label>
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
