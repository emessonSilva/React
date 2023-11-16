interface ProfileBackground {
  children: React.ReactNode;
}

export function ProfileBackground(props: ProfileBackground) {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     }}>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        backgroundColor: "white",
        width: 350,
        marginTop: 30,
        borderRadius: 5,
        position: "relative",
      }}
    >
      {props.children}
    </div>

    </div>
    
    
  );
}
