import { HomePage } from "./components/conditionallyReturning/home";
import { Card } from "./components/pessoa/card";
import { Father } from "./components/pessoa/father";
import { FatherOfAll } from "./components/pessoa/fatherofall";
import { Pessoa } from "./components/pessoa/pessoa";
import { ProfileUser } from "./components/postagem/profile";
import { ProfileBackground } from "./components/postagem/profileBackground";
import { List } from "./components/ReactFragment/list";
// import { Form } from "./components/reactUseState/form";
import { Task, TaskStructure } from "./components/listRenderization/taskList";

import { Button } from "./components/button/button";
import { Counter } from "./components/useState/counter";

//Lista renderizada
const tasks: TaskStructure[] = [
  {
    id: crypto.randomUUID(),
    titulo: "Atividade de React",
    taskStatus: true,
    
  },
  {
    id: crypto.randomUUID(),
    titulo: "Atividade de Banco de Dados",
    taskStatus: false,
    
  },
  {
    id: crypto.randomUUID(),
    titulo: "Atividade de Coding",
    taskStatus: false,
    
  },
]


export default function Home() {
  return (
    <main>

      <FatherOfAll>
        <Father>
          <Card>
            <Pessoa
              nome="João"
              cor="yellow"
              profissao="Programador"
              foto="https://img.freepik.com/vetores-premium/homem-de-desenho-animado-isolado_376167-176.jpg"
              tamanho={200}
            />
          </Card>
        </Father>
      </FatherOfAll>

      <ProfileBackground>
        <ProfileUser
          username="Bruna"
          // status="ativo"
          foto="https://img.freepik.com/vetores-premium/um-desenho-animado-de-uma-mulher-com-longos-cabelos-castanhos-e-um-top-amarelo_835197-5428.jpg"
          tamanhofoto={40}
          comprimentopostagem={320}
          alturapostagem={290}
          cor="black"
          borda={30}
          postagem="https://static.vecteezy.com/ti/fotos-gratis/t2/2098203-gato-malhado-prateado-sentado-no-fundo-verde-gratis-foto.jpg"
        ></ProfileUser>
      </ProfileBackground>

      
      <ProfileBackground>
        <ProfileUser
          username="João"
          // status="ativo"
          foto="https://img.freepik.com/fotos-premium/um-desenho-de-um-homem-com-cabelo-ruivo-e-fundo-azul-com-um-rosto-sorridente_783884-27622.jpg?w=2000"
          tamanhofoto={40}
          comprimentopostagem={320}
          alturapostagem={290}
          cor="black"
          borda={30}
          postagem="https://play-lh.googleusercontent.com/FAAZz1OMQkD6mR5xnh3XXC10hpmqfqfI5Qa3XkBmQLMCqIXfhBWfQI8FTxR98Xz5yYs"
        ></ProfileUser>
      </ProfileBackground>

      
      <ProfileBackground>
        <ProfileUser
          username="Ana"
          // status="ativo"
          foto="https://img.freepik.com/fotos-premium/mulher-jovem-asiatica-pensando-e-duvidando-da-ilustracao-dos-desenhos-animados-personagem-hipster-feminino-com-rosto-sonhador-em-fundo-abstrato-ai-gerou-cartaz-colorido-desenhado-brilhante_107173-50511.jpg"
          tamanhofoto={40}
          comprimentopostagem={320}
          alturapostagem={290}
          cor="black"
          borda={30}
          postagem="https://blog.pariscityvision.com/fr/wp-content/uploads/2018/04/londres.jpg"
        ></ProfileUser>
      </ProfileBackground>
      
      <List/>

      {/* <Form></Form> */}

<HomePage></HomePage>
    
    
    <h2 style={{marginTop: 20}}>Lista de Atividades</h2>
    {tasks.map((item) => (
        <Task
          id={item.id}
          titulo={item.titulo}
          taskStatus={item.taskStatus}
        />
        ))} 
       <br></br>
       <br></br>
      <Button></Button>
      <br></br>
      <br></br>
      <Counter></Counter>

    </main>
  );
}
