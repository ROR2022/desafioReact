import React, {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getDataUser } from '../../../../../api/crudUsers';
import UserBadge from '../UserBadge';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



const BasicComment = ({dataComment}) => {
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    retriveDataUser();
  }, []);

  const retriveDataUser = async () => {
    if (dataUser._id) return;
    try {
      //console.log("Recuperaremos el dataUser:..");
      const idUser = dataComment?.userId;
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
    <Card style={{backgroundColor:'#dddddd80', marginBottom:'10px'}} sx={{ minWidth: 275 }}>
      <UserBadge dataUser={dataUser}/>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dataComment.comment}
        </Typography>
        
        
      </CardContent>
      
    </Card>
  )
}

export default BasicComment