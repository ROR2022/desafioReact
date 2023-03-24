import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{
      flexGrow: 1,
      
      background: "black",
    }}
  >
    <Link  style={{color:'inherit', textDecoration:'none'}} to={'/'}>
    Dev
    </Link>
  </Typography>
  );
};

export default Logo;
