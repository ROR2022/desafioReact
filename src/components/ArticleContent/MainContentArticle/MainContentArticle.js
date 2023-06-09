import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { lastCardImageTemp } from "../../../assets/constants/links";
import UserBadge from "../../HomeComponents/MainContent/BasicCards/UserBadge";
import { Link } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Comments from "../../HomeComponents/MainContent/BasicCards/Comments/Comments";
import { deletePost, getDataPost } from "../../../api/crudPosts";
import { getDataUser } from "../../../api/crudUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import useDevto from '../../../hooks/useDevto';

const MainContent = () => {
  const [dataCard, setDataCard] = useState({});
  const [dataUserArticle, setdataUserArticle] = useState({});
  const [_,__,dataUser]= useDevto();

  const navigate = useNavigate();
  const params = useParams();

  console.log("params:..", params);
  useEffect(() => {
    if (params?.id) {
      retriveDataCard(params.id);
    }
  }, []);

  useEffect(() => {
    if (dataCard?._id) {
      retriveDataUser();
    }
  }, [dataCard]);

  const retriveDataCard = async (id) => {
    try {
      const result = await getDataPost(id);
      console.log("DataPost from DB:..", result);
      if (result?.dataPost) {
        setDataCard({ ...result.dataPost });
      }
    } catch (error) {
      console.log("Error retriving data card:..");
    }
  };

  const retriveDataUser = async () => {
    try {
      const result = await getDataUser(dataCard.user);
      console.log("Result getDataUser:..", result);
      if (result._id) {
        setdataUserArticle({ ...result });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async()=>{
    const id= params?.id;
    if(!id) return
    try {
      const result = await deletePost(id);
      console.log('Result DeletePost:..',result);
      if(result){
        navigate('/')
        console.log('Navegando aHome:...')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit=()=>{
    console.log('Editaremos el Post:');
    navigate(`/edit/${params.id}`);
  }

  return (
    <Card sx={{ marginTop: "30px" }}>
      <CardMedia
        style={{ width: "100%" }}
        sx={{ height: "30vh" }}
        image={!dataCard.urlImage ? lastCardImageTemp : dataCard.urlImage}
        title="lastCardImage"
      />
      <div
        style={{
          display: dataUser?.name?"flex":"none",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button onClick={handleEdit} variant="outlined" startIcon={<EditIcon />}></Button>
        <Button onClick={handleDelete} color='error' variant="outlined" startIcon={<DeleteIcon />}></Button>
      </div>

      <UserBadge dataUser={dataUserArticle} />

      <CardContent style={{ textAlign: "left", marginLeft: "50px" }}>
        <Typography
          className="hoverMainTitleEffect"
          gutterBottom
          variant="h5"
          component="div"
        >
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={dataCard?._id ? `/article/${dataCard?._id}` : "#"}
          >
            {!dataCard ? "MainTitle" : dataCard.titlePost}
          </Link>
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
      <Comments />
    </Card>
  );
};

export default MainContent;
