import { useState } from "react";

function Toggle() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleClickToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  return handleClickToggle;
}

export default Toggle;
