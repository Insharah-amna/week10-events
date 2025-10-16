
export default function page() {

  const increase = () => {
    console.log("Increase")
  }

  const decrease = () => {
    console.log("Increase")
  }
  
  return (
    <div className="bg-blue-200 h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl font-bold">Counter</h1>
      <p>0</p>
      <div className="flex gap-5">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
   </div>
  );
}
