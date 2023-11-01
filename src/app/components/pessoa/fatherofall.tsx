interface FatherOfAllProps {
  children: React.ReactNode;
}

export function FatherOfAll(props: FatherOfAllProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
}
