interface ProfileProps {
  username: string;
  // status: string;
  foto: any;
  tamanhofoto: number;
  comprimentopostagem: number;
  alturapostagem: number;
  cor: string;
  borda: number;
  postagem: any;
}

export function ProfileUser(props: ProfileProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", position: "absolute", top: 10 }}>
        <img
          style={{ borderRadius: props.borda}}
          src={props.foto}
          alt={props.username}
          width={props.tamanhofoto}
        />
        <h5 style={{ color: props.cor, marginLeft: 10 }}>Username: {props.username}</h5>
      </div>
      {/* <p style={{ color: props.cor }}>Status: {props.status}</p> */}
      <div>
        <img 
        style={{marginTop: 50}}
        src={props.postagem} 
        width={props.comprimentopostagem} 
        height={props.alturapostagem}/>
      </div>
    </div>
  );
}

