import { useState } from "react";

export default function Board() {
  function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
      setValue("X");
    }

    return (
      <button
        onClick={handleClick}
        className="bg-white border-2 border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      >
        {value}
      </button>
    );
  }

  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
