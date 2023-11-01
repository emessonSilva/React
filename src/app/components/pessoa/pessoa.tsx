interface PessoaProps {
  nome: string;
  profissao: string;
  foto: any;
  tamanho: number;
  cor: string;
}

export function Pessoa(props: PessoaProps) {
  return (
    <div>
      <img src={props.foto} alt={props.nome} width={props.tamanho} />
      <h2 style={{ color: props.cor }}> Nome: {props.nome}</h2>
      <p>Profissão: {props.profissao}</p>
    </div>
  );
}
