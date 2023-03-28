import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { logoDevtoBlack } from "../../../assets/constants/links";

const Logo = () => {
  return (
   
    <Link  style={{color:'inherit', textDecoration:'none'}} to={'/'}>
    <CardMedia
          style={{ width: "50px" }}
          sx={{ height: "50px" }}
          image={logoDevtoBlack}
          title="lastCardImage"
        />
    </Link>
  
  );
};

export default Logo;
