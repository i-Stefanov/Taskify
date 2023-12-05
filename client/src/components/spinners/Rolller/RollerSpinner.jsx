import styles from "./RollerSpinner.module.css";

export default function RollerSpinner() {
  return (
    <div className={styles["container"]}>
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles["loading-text"]}>Loading please wait...</p>
    </div>
  );
}
