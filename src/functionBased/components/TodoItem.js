import React, {useEffect, useState} from "react";
import styles from "./TodoItem.module.css"
import {FaTrash} from "react-icons/fa";

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => setEditing(true)

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }


  const completedStyle = {
    fontStyle: "italic", color: "#595959", opacity: 0.4, textDecoration: "line-through",
  }
  const {completed, id, title} = props.todo
  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (<li className={styles.item}>
    <div style={viewMode} onDoubleClick={handleEditing}>
      <input
        checked={completed}
        className={styles.checkbox}
        type="checkbox"
        onChange={() => props.handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>
          {title}
        </span>
      <button onClick={() => props.deleteTodoProps(id)}>
        <FaTrash
          style={{ color: "orangered", fontSize: "16px" }}
        />
      </button>
    </div>
    <input
      style={editMode}
      type="text"
      className={styles.textInput}
      value={title}
      onChange={e => {
        props.setUpdate(e.target.value, id)
      }}
      onKeyDown={handleUpdatedDone}
    />
  </li>)

}

export default TodoItem