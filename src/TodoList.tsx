import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";

type TodoType = {
  id: number; //배열 내 위치를 구분하기 위해
  todo: string;
};

const TodoList = (): JSX.Element => {
  const [todoList, setTodoList] = useState<TodoType[]>([]); // 배열 state
  const [todoText, setTodoText] = useState<string>("");
  //const [todoId, setTodoId] = useState(1);

  const updateTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };
  //</HTMLInputElement>const changeString = (event: ChangeEvent<HTMLInputElement>) => {
  //  setTodoValue(event.currentTarget.value);
  // };

  const registerTodo = async () => {
    await axios.post("http://localhost:5000/todos", { todo: todoText });
    setTodoText("");
    await getTodoList();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await getTodoList();
  };

  const getTodoList = async () => {
    const { data } = await axios.get<TodoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={updateTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default TodoList;

//   const addList = () => {
//     const todo: TodoType = { id: todoId, todo: todoValue };
//     todoList.push(todo);
//     setTodoList([...todoList]); // todoList에 todo 추가
//     // setTodoList([...todoList, todo]);
//     setTodoId(todoId + 1); // todoID 증가
//     setTodoValue(""); // 입력값 보관한 state 초기화
//   };

//   const deleteList = (id: number) => {
//     //hint: filter 기능 사용하자. 조건에 맞는 것만 배열로 출력
//     const deletedList = todoList.filter((todo) => todo.id != id);
//     setTodoList(deletedList);
//   };

//   return (
//     <>
//       <input type="text" onChange={changeString} value={todoValue} />
//       <button onClick={addList}>저장</button>
//       {todoList.map((todo: TodoType) => {
//         return (
//           <section key={todo.id}>
//             {todo.todo}
//             <button onClick={() => deleteList(todo.id)}>X</button>
//           </section>
//         );
//       })}
//     </>
//   );
// };
