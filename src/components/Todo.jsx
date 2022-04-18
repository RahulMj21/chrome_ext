import React, { useEffect, useRef, useState } from "react";
import { FaPen, FaPencilAlt, FaTrash } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const Todo = () => {
  const [showTodo, setShowTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const editTodoRef = useRef(null);
  const inputRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      todo: inputRef.current.value.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    inputRef.current.value = null;
  };

  const updateTodo = (id, completed) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const handleEditTodo = (e, id) => {
    e.preventDefault();
    if (!editTodoRef.current.value.trim()) return setIsEdit(null);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          todo: editTodoRef.current.value,
        };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
    editTodoRef.current.value = null;
    setIsEdit(null);
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  return (
    <>
      <div className="todo-toggler" onClick={() => setShowTodo(!showTodo)}>
        Todos
      </div>
      {showTodo && (
        <div className="todo-container">
          <div className="todos">
            {todos.length !== 0 &&
              todos.map(({ id, todo, completed }) => {
                return (
                  <div className="todo" key={id}>
                    {completed ? (
                      <MdCheckBox
                        className="completed"
                        onClick={() => updateTodo(id, false)}
                      />
                    ) : (
                      <MdCheckBoxOutlineBlank
                        onClick={() => updateTodo(id, true)}
                      />
                    )}
                    {isEdit === id ? (
                      <form
                        className="edit-todo-form"
                        onSubmit={(e) => handleEditTodo(e, id)}
                      >
                        <input
                          className="edit-todo-input"
                          type="text"
                          placeholder={todo}
                          ref={editTodoRef}
                        />
                      </form>
                    ) : (
                      <p className={completed ? "done" : ""}>{todo}</p>
                    )}
                    <div className="actions">
                      <FaPen onClick={() => setIsEdit(id)} />
                      <FaTrash onClick={() => removeTodo(id)} />
                    </div>
                  </div>
                );
              })}
          </div>
          <form onSubmit={handleAddTodo} className="mainfocus__form">
            <div className="input-group">
              <FaPencilAlt />
              <input ref={inputRef} type="text" placeholder="add todo" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Todo;
