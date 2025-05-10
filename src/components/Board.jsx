export default function Board() {
  function Square({value}) {
    return (
      <button className="bg-white border-2 border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
        X
      </button>
    );
  }

  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
