import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
// import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [faceShowFlag, setFaceShowFlag] = useState(true);

//   const onClickCountUp = () => {
//     setNum(num + 1);
//   };

//   const onClickSwitchShowFlag = () => {
//     setFaceShowFlag(!faceShowFlag);
//   };

//   useEffect(() => {
//     if (num % 3 === 0) {
//       faceShowFlag || setFaceShowFlag(true);
//     } else {
//       faceShowFlag && setFaceShowFlag(false);
//     }
//   }, [num]);

//   return (
//     <>
//       <h1 style={{ color: "red" }}>こんにちは！</h1>
//       <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
//       <ColorfulMessage color="pink">元気です！</ColorfulMessage>
//       <button onClick={onClickCountUp}>カウントアップ</button>
//       <br />
//       <button onClick={onClickSwitchShowFlag}>on/off</button>
//       <p>{num}</p>
//       {faceShowFlag && <p>( ^ω^ )</p>}
//     </>
//   );
// };

// export default App;
