const Error = ({ children }) => {
    return (
      <div  style={{
        width: "100%",
        padding: 10,
        marginBottom: 5,
        borderRadius: 4,
        fontSize:15,
        backgroundColor: "red",
        textAlign: "center",
        textSizeAdjust:5,
        color: "white",
        textTransform: "capitalize",
        justifyContent:"space-around"
      }}>
        {children}
      </div>
    );
  };
  
  export default Error;