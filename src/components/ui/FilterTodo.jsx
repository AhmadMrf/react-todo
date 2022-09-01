import { useState, useRef } from "react";
import styles from "./filterTodo.module.css";
import { MdOutlineCancel } from "react-icons/md";

const FilterTodo = (props) => {
  const [completedIsChecked, setCompletedIsChecked] = useState("all");
  const [dateRadio, setDateRadio] = useState("before");
  const [textInput, setTextInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const searchInput = useRef();
  const filter = {
    completedFilter: completedIsChecked,
    dateFilter: dateInput,
    isBeforeDate: dateRadio,
    searchText: textInput,
  };

  const radioInputHandler = (e) => {
    switch (e.target.name) {
      case "date":
        setDateRadio(e.target.value);
        props.onFilter({ ...filter, isBeforeDate: e.target.value });
        break;
      case "isCompleted":
        setCompletedIsChecked(e.target.value);
        props.onFilter({ ...filter, completedFilter: e.target.value });
        break;
    }
  };
  const dateInputHandler = (e) => {
    setDateInput(e.target.value);
    props.onFilter({ ...filter, dateFilter: e.target.value });
  };
  const textInputHandler = (e) => {
    setTextInput(e.target.value);
    props.onFilter({ ...filter, searchText: e.target.value });
  };

  const resetSearchInput = (e) => {
    setTextInput("");
    props.onFilter({ ...filter, searchText: e.target.value });
    searchInput.current.focus();
  };
  return (
    <section className={styles.find_todo}>
      <div className={styles.search}>
        <input ref={searchInput} onChange={textInputHandler} value={textInput} type="text" />
        {textInput && <MdOutlineCancel className={styles.search_reset} onClick={resetSearchInput} />}
        <button>search</button>
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.date}>
          <label htmlFor="dateSearch">
            <span>search by date</span>
            <input onChange={dateInputHandler} value={dateInput} type="date" name="dateSearch" id="dateSearch" />
          </label>

          <label htmlFor="before">
            <span> before</span>
            <input onChange={radioInputHandler} checked={dateRadio === "before"} value="before" type="radio" name="date" id="before" />
          </label>
          <label htmlFor="after">
            <span>after</span>
            <input onChange={radioInputHandler} checked={dateRadio === "after"} value="after" type="radio" name="date" id="after" />
          </label>
        </div>

        <div className={styles.completed}>
          <label htmlFor="isCompleted">
            <span> completed</span>
            <input
              onChange={radioInputHandler}
              checked={completedIsChecked === "completed"}
              value="completed"
              type="radio"
              name="isCompleted"
              id="isCompleted"
            />
          </label>
          <label htmlFor="isNotCompleted">
            <span>not completed</span>
            <input
              onChange={radioInputHandler}
              checked={completedIsChecked === "notCompleted"}
              value="notCompleted"
              type="radio"
              name="isCompleted"
              id="isNotCompleted"
            />
          </label>
          <label htmlFor="all">
            <span>all todo</span>
            <input onChange={radioInputHandler} checked={completedIsChecked === "all"} value="all" type="radio" name="isCompleted" id="all" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default FilterTodo;
