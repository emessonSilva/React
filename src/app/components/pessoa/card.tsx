interface CardProps {
  children: React.ReactNode; //serve para possibilitar adicionar uma tag dentro dessa
}
//o nome da tag para chamar no page.tsx
export function Card(props: CardProps) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: 30,
        backgroundColor: "purple",
        width: 300,
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div> // para funcionar, tem que chamar depois
  );
}
