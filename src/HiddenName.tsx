import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");

  //event handler
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const fstName = newName.substring(0, 1);
      const lstName = newName.substring(1, newName.length - 1);
      const hiddenPart = "*".repeat(name.length - 2);

      newName = fstName + hiddenPart + lstName;
    }
    setName(newName);
  };

  return (
    <>
      <input type="name" onChange={changeName} />;{name}
    </>
  );
};

export default HiddenName;
