
export default function Kallu(props:any) {
  console.log(props.city);
  
  return (
    <div className="bg-black text-white inline-block min-h-[400px] p-6 text-center rounded">
      <img className="ml-5 h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
      <h1 className="text-2xl font-semibold">Username {props.user}</h1>
      <h2>{props.city}, {props.age}</h2>
      <button className="bg-emerald-500 px-4 py-2 rounded mt-5">Add Friend</button>
    </div>
  );
}