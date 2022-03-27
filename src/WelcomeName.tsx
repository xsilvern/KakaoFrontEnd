import { ChangeEvent, useState } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");

  //event handler
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={changeName} />
      <article>반갑습니다 {name}님</article>
    </>
  );
};

export default WelcomeName;
