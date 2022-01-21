import { useNavigate } from "react-router-dom";

function Content3(props) {
    const navigate = useNavigate()
  return <div>
        <button onClick={()=>{
          navigate("/contents3")
      }} className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tab :{props.value}</button>
  </div>;
}

export default Content3;
