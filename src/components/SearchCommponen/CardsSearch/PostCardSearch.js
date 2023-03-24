import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { getDataUser } from "../../../api/crudUsers";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
//import "./CardBasic.css";
import UserBadge from "../../HomeComponents/MainContent/BasicCards/UserBadge";

const PostCardSearch = ({dataCard}) => {
  const [dataUser, setDataUser] = useState({});
  
   

    useEffect(() => {
      retriveDataUser();
    }, []);
  
    const retriveDataUser = async () => {
      if (dataUser._id) return;
      try {
        //console.log("Recuperaremos el dataUser:..");
        const idUser = dataCard?.user;
        if (idUser) {
          const result = await getDataUser(idUser);
          //console.log("result getDataUser:..", result);
          setDataUser({
            ...result,
          });
        }
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    };
    return (
      <Card sx={{ marginTop: "30px" }}>
       
  
        <UserBadge dataUser={dataUser}/>
  
        <CardContent style={{ textAlign: "left", marginLeft: "50px" }}>
          <Typography
            className="hoverMainTitleEffect"
            gutterBottom
            variant="h5"
            component="div"
          >
            {!dataCard ? "MainTitle" : dataCard.titlePost}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            {!dataCard ? "Aqui va la descipcion del Post" : dataCard.textPost}
          </Typography>
          <Typography
            style={{ marginTop: "20px" }}
            variant="body2"
            color="text.secondary"
            component="div"
          >
            <div style={{ display: "flex" }}>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "20px", padding: "5px" }}
              >
                #tag1
              </p>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "20px", padding: "5px" }}
              >
                #tag2
              </p>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "20px", padding: "5px" }}
              >
                #tag3
              </p>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "20px", padding: "5px" }}
              >
                #tag4
              </p>
            </div>
          </Typography>
          <Typography
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
            variant="body2"
            color="text.secondary"
            component="div"
          >
            <div style={{ display: "flex" }}>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "10px", padding: "5px" }}
              >
                👍🙋‍♂️👏16 reactions
              </p>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "", padding: "5px" }}
              >
                🗨️ 7 comments
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "10px", padding: "5px" }}
              >
                1 min read
              </p>
              <p
                className="hoverBtnEffect"
                style={{ marginRight: "", padding: "5px" }}
              >
                <BookmarkBorderIcon />
              </p>
            </div>
          </Typography>
        </CardContent>
        
      </Card>
  )
}

export default PostCardSearch