import { useNavigate } from "react-router-dom";

function Content1(props) {
    const navigate = useNavigate()
  return <div>
       <button onClick={()=>{
          navigate("/contents2")
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tab :{props.value}</button>
  </div>;
}

export default Content1;
