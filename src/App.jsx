import React, { useEffect, useState } from "react";
import "./styles.css";
// import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああああ",
    "いいいいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        {completeTodos.map((todo) => {
          return (
            <ul>
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            </ul>
          );
        })}
      </div>
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
