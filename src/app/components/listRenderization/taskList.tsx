
export interface TaskStructure {
    id: string;
    titulo: string;
    taskStatus: boolean;
}

export function Task(props: TaskStructure) {
  return (
    <>
    <div style={{display: "flex", flexDirection: "row", marginTop: 10}}>
      <h4>{props.titulo}</h4>
      <span style={{ color: props.taskStatus ? 'green' : 'red', marginLeft: 20 }}>
        {props.taskStatus ? 'Concluído' : 'Pendente'}
      </span>
    </div>
    </>
    
  );
}
