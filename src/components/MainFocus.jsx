import React, { useEffect, useRef, useState } from "react";
import { FaPen, FaPencilAlt, FaRegStar, FaStar, FaTrash } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const MainFocus = () => {
  const [mainFocus, setMainFocus] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const setMainFocusRef = useRef();
  const editMainFocusRef = useRef();

  const handleSetFocus = (e) => {
    e.preventDefault();
    if (!setMainFocusRef.current?.value?.trim()) return;

    localStorage.setItem(
      "mainFocus",
      JSON.stringify(setMainFocusRef.current.value)
    );
    setMainFocus(setMainFocusRef.current.value);
  };

  const handleEditFocus = (e) => {
    e.preventDefault();
    if (!editMainFocusRef.current?.value?.trim()) return setIsEdit(false);
    localStorage.setItem(
      "mainFocus",
      JSON.stringify(editMainFocusRef.current.value)
    );
    setMainFocus(editMainFocusRef.current.value);
    editMainFocusRef.current.value = null;
    setIsEdit(false);
  };

  const handleRemoveFocus = () => {
    localStorage.removeItem("mainFocus");
    setMainFocus(null);
    setCompleted(false);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("mainFocus"))) {
      setMainFocus(JSON.parse(localStorage.getItem("mainFocus")));
    }
  }, []);

  return (
    <div className="mainfocus">
      {!mainFocus ? (
        <form onSubmit={handleSetFocus} className="mainfocus__form">
          <div className="input-group">
            <FaPencilAlt />
            <input
              ref={setMainFocusRef}
              type="text"
              placeholder="what is your main focus today"
            />
          </div>
        </form>
      ) : (
        <div className="todaysfocus todo">
          {completed ? (
            <MdCheckBox
              className="completed"
              onClick={() => setCompleted(false)}
            />
          ) : (
            <MdCheckBoxOutlineBlank onClick={() => setCompleted(true)} />
          )}
          {isEdit ? (
            <form
              className="edit-todo-form"
              onSubmit={(e) => handleEditFocus(e)}
            >
              <input
                className="edit-todo-input"
                type="text"
                placeholder={mainFocus}
                ref={editMainFocusRef}
              />
            </form>
          ) : (
            <p className={completed ? "done" : ""}>{mainFocus}</p>
          )}
          <div className="actions">
            <FaPen onClick={() => setIsEdit(!isEdit)} />
            <FaTrash onClick={() => handleRemoveFocus()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFocus;
