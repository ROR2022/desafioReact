import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { lastCardImageTemp } from "../../../../assets/constants/links";
import useDevto from "../../../../hooks/useDevto";
import { getDataUser } from "../../../../api/crudUsers";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './LastCard.css';

//sx={{ height: 140}} sx={{ maxWidth: 345 }}

const LastCard = () => {
  const [dataPosts] = useDevto();
  const [dataCard, setDataCard] = useState({});
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    setDataCard({
      ...dataPosts[0],
    });
  }, [dataPosts]);
  useEffect(() => {
    if (dataCard._id && !dataUser._id) {
      retriveDataUser();
      console.log("retriving dataUser:..");
    }

    if (dataUser._id) {
      console.log("dataUser:..", dataUser);
    }

    if (dataCard._id) {
      console.log("dataCard:..", dataCard);
    }
  }, [dataCard, dataUser]);

  const retriveDataUser = async () => {
    if (dataUser._id) return;
    try {
      console.log("Recuperaremos el dataUser:..");
      const idUser = dataCard?.user;
      if (idUser) {
        const result = await getDataUser(idUser);
        console.log("result getDataUser:..", result);
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
      <CardMedia
        style={{ width: "100%" }}
        sx={{ height: "30vh" }}
        image={!dataCard?lastCardImageTemp:dataCard.urlImage}
        title="lastCardImage"
      />
      <Stack sx={{marginTop:'20px', marginLeft:'10px'}} direction="row" spacing={2}>
          <Avatar alt="userAvatar" src={!dataUser ? "#" : dataUser.avatarUrl} />
          <div style={{display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'flex-start'}}>
          <Typography gutterBottom variant="p" component="div">
            {!dataUser ? "userName" : dataUser.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <small>Mar 23 (16 hrs ago)</small>
        </Typography>
        </div>
        </Stack>
      <CardContent style={{ textAlign:'left', marginLeft:'50px'}}>
        <Typography className="hoverMainTitleEffect" gutterBottom variant="h5" component="div">
          {!dataCard ? "MainTitle" : dataCard.titlePost}
        </Typography>
        
        <Typography  variant="body2" color="text.secondary">
          {!dataCard ? "Aqui va la descipcion del Post" : dataCard.textPost}
        </Typography>
        <Typography style={{marginTop:'20px'}}  variant="body2" color="text.secondary">
          <div style={{display:'flex'}}>
            <p className="hoverBtnEffect" style={{marginRight:'20px', padding:'5px'}}>#tag1</p>
            <p className="hoverBtnEffect" style={{marginRight:'20px', padding:'5px'}}>#tag2</p>
            <p className="hoverBtnEffect" style={{marginRight:'20px', padding:'5px'}}>#tag3</p>
            <p className="hoverBtnEffect" style={{marginRight:'20px', padding:'5px'}}>#tag4</p>
          </div>
                    
         </Typography>
         <Typography style={{marginTop:'20px', display:'flex', justifyContent:'space-between'}}  variant="body2" color="text.secondary">
          <div style={{display:'flex'}}>
            <p className="hoverBtnEffect" style={{marginRight:'10px', padding:'5px'}}>👍🙋‍♂️👏16 reactions</p>
            <p className="hoverBtnEffect" style={{marginRight:'', padding:'5px'}}>🗨️ 7 comments</p>
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
            <p className="hoverBtnEffect" style={{marginRight:'10px', padding:'5px'}}>1 min read</p>
            <p className="hoverBtnEffect" style={{marginRight:'', padding:'5px'}}><BookmarkBorderIcon/></p>
          </div>
                    
         </Typography>
      </CardContent>
      
    </Card>
  );
};

export default LastCard;
