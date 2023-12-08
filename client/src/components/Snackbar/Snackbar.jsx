import styles from "./Snackbar.module.css";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Snackbar() {
  const contextValues = useAuthContext();
  console.log(contextValues);
  return (
    <div className={styles.snackbar}>
      <div className={styles.symbol}></div>
      <div className={styles.message}></div>
    </div>
  );
}
