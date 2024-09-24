function Card(props) {
  const { todo, key } = props.user;
  
  return (
    <div className="box w-full bg-purple-900 p-[20px] gap-[20px] h-[50px] rounded-xl flex items-center justify-between">
      <p>{todo}</p>
      <div className="flex gap-x-4">
        <span>_/</span>
        <button onClick={() => props.deletTodo(key)} className="bg-purple-500 rounded-xl px-2 py-1">de</button>
      </div>
    </div>
  );
}

export default Card;
