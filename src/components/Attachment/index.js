// icons
import { ReactComponent as DocumentIcon } from "assets/Document.svg";
// import { ReactComponent as PictureIcon } from "assets/Picture.svg";

// styles
import styles from "./Attachment.module.css";

const Attachment = () => {
  return (
    <div className={styles.attachment}>
      <div className={styles.attachmentIcon}>
        <DocumentIcon />
      </div>
      <div className={styles.attachmentText}>
        <h3 className={styles.attachmentName}>Preview.zip</h3>
        <p className={styles.attachmentSize}>32 mb</p>
      </div>
    </div>
  );
};

export default Attachment;
