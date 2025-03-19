import { useEffect } from "react";
import { getAllTareas } from "../../http/tareas";
import ListTareas from "../ui/ListTareas/ListTareas";
import Header from "../ui/Header/Header";


const TareasScreen = () => {
  const getTareas = async()=>{
    const result = await getAllTareas();
    console.log(result)
    return result
  }

  useEffect(()=>{
    getTareas();
  },[])



  return (
    <div>
      <Header/>
      <ListTareas/>
    </div>
  )
}

export default TareasScreen
