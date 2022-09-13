import { useState } from "react";
import { MdDone, MdOutlineCancel } from "react-icons/md";
import ColorTag from "../ui/ColorTag";
import InputTag from "../ui/InputTag";
import styles from "./editUser.module.css";
import { useContext } from "react";
import authContext from "../../context/auth-context";

const EditUser = (props) => {
  const [editedUser, setEditedUser] = useState(props.prevUser);
  const [userColor, setUserColor] = useState(props.prevColor);
  const [isValid, setIsValid] = useState({ isValid: " ", errorMsg: "" });
  const { userData, onEditUser } = useContext(authContext);

  const validation = (userInput) => {
    if (userInput.length < 4 || userInput.length > 20) {
      setIsValid({ isValid: false, errorMsg: "" });
      return false;
    } else {
      setIsValid({ isValid: true, errorMsg: "" });
      return true;
    }
  };

  const confirmEditUser = () => {
    if (!validation(editedUser)) {
      setIsValid(() => ({
        isValid: false,
        errorMsg: "enter between 4 & 20 charecter",
      }));
      return;
    }
    const newEditedUser = { ...userData, userInfo: { userName: editedUser, color: userColor }, doDelete: true };
    onEditUser(newEditedUser);
    props.onEditing();
  };
  const editUser = (editedUser) => {
    validation(editedUser);
    setEditedUser(editedUser);
  };
  const getUserColor = (newUserColor) => {
    setUserColor(newUserColor);
  };

  const closeModal = () => {
    props.onEditing();
  };
  return (
    <div className={styles.editUser}>
      <div className={styles.inputs}>
        <InputTag
          error={!isValid.isValid}
          onChangeHandler={editUser}
          value={editedUser}
          className={styles["input-text"]}
          type='text'
          id='editUser'
          label='enter new user name'
          errorMsg={isValid.errorMsg}
          autofocus={true}
          required={true}
        />
        <ColorTag id='editColor' value={userColor} onChangeHandler={getUserColor} />
      </div>
      <div className={styles.buttoms}>
        <MdDone title='confirm changes' onClick={confirmEditUser} />
        <MdOutlineCancel title='cancel6' onClick={closeModal} />
      </div>
    </div>
  );
};
export default EditUser;
