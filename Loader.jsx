import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{color:"#00000080"}}/>
    </div>
  );
};

export default Loader;
