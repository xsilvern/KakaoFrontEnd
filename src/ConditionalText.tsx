import { text } from "node:stream/consumers";
import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [text1, setText1] = useState<string>("");

  //event handler
  const changeText1 = (event: ChangeEvent<HTMLInputElement>) => {
    setText1(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={changeText1} />;
      <article>{text1.length > 5 && text}</article>
    </>
  );
};

export default ConditionalText;
