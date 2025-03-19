import { FC } from "react";
import { ITarea } from "../../../types/ITareas";
import useTareas from "../../../hooks/useTareas";

type ICardList = {
  tarea: ITarea;
  handleOpenModal: (tarea: ITarea) => void;
};

const CardList: FC<ICardList> = ({
  tarea,
  handleOpenModal,
}) => {
  const {eliminarTarea} = useTareas()
  const eliminarTareaById = () => {
    eliminarTarea(tarea.id!)
  };
  const editarTarea = () => {
    handleOpenModal(tarea)
  };
  return (
    <>
      <div className="w-[100%] bg-[#fff] rounded-[0.4rem] p-[0.4rem] flex justify-between">
        <div>
          <h1 className="font-bold">Titulo: {tarea.titulo}</h1>
          <p>Descripción: {tarea.descripcion}</p>
          <p>
            <b>Fecha Limite: {tarea.fechaLimite}</b>
          </p>
        </div>
        <div className="gap-3 flex flex-col justify-center ">
          <button
            className=" p-[3px]  cursor-pointer rounded bg-violet-500 hover:bg-violet-600"
            onClick={eliminarTareaById}
          >
            Eliminar
          </button>
          <button
            className=" p-[3px]  cursor-pointer rounded bg-green-500 hover:bg-green-600"
            onClick={editarTarea}
          >
            Editar
          </button>
        </div>
      </div>
    </>
  );
};

export default CardList;
