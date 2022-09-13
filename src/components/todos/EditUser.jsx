import { useState } from "react";
import { MdDone, MdOutlineCancel } from "react-icons/md";
import ColorTag from "../ui/ColorTag";
import InputTag from "../ui/InputTag";
import styles from "./editUser.module.css";
import { useContext } from "react";
import authContext from "../../context/auth-context";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

  const confirmDeleteUser = () => {
    const Alert = withReactContent(Swal);

    Alert.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newEditedUser = { ...userData, doDelete: true };
        onEditUser(newEditedUser);
      }
    });
  };
  const confirmEditUser = () => {
    if (!validation(editedUser)) {
      setIsValid(() => ({
        isValid: false,
        errorMsg: "enter between 4 & 20 charecter",
      }));
      return;
    }
    const newEditedUser = { ...userData, userInfo: { userName: editedUser, color: userColor } };
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
      <div className={styles.buttons}>
        <div>
          <MdDone title='confirm changes' onClick={confirmEditUser} />
          <MdOutlineCancel title='cancel' onClick={closeModal} />
        </div>
        <button onClick={confirmDeleteUser} className={styles["delete-button"]}>
          delete user
        </button>
      </div>
    </div>
  );
};
export default EditUser;
