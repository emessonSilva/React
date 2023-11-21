import React, { useState } from 'react';

interface ProfileProps {
  username: string;
  foto: any;
  tamanhofoto: number;
  comprimentopostagem: number;
  alturapostagem: number;
  cor: string;
  borda: number;
  postagem: any;
}

export function ProfileUser(props: ProfileProps) {
  
  //hook useState
  const [filledHeart, setfilledHeart] = useState(false);

  const handleFilledHeart = () => {
    setfilledHeart(!filledHeart);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: 10,
          }}
        >
          <img
            style={{ borderRadius: props.borda }}
            src={props.foto}
            alt={props.username}
            width={props.tamanhofoto}
          />
          <h5 style={{ color: props.cor, marginLeft: 10 }}>
            Username: {props.username}
          </h5>
        </div>
        <div>
          <img
            style={{ marginTop: 50 }}
            src={props.postagem}
            width={props.comprimentopostagem}
            height={props.alturapostagem}
          />
        </div>
        <div>
          <i
          //const heartClassName = filledHeart ? 'fa fa-heart' : 'fa fa-heart-o'; o debaixo é a msm coisa
            className={`fa ${filledHeart ? 'fa-heart' : 'fa-heart-o'}`}
            style={{
              color: filledHeart ? 'red' : 'black',
              fontSize: 20,
              marginTop: 5,
              cursor: 'pointer',
            }}
            onClick={handleFilledHeart}
          ></i>
        </div>
      </div>
    </>
  );
}
