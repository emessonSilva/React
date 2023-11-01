interface FatherProps {
  children: React.ReactNode;
}

export function Father(props: FatherProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid red",
        backgroundColor: "lime",
        width: 400,
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
}
