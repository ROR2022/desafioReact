import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const initialDataLogin = { email: "", password: "", confirm:'' };

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataLogin, setDataLogin] = useState(initialDataLogin);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log("Enviaremos Datos:..", dataLogin);
    setDataLogin(initialDataLogin);
  };
  return (
    <div>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          sm={10}
          md={8}
          lg={6}
        >
          <Typography color="secondary" className="" gutterBottom variant="h6" component="div">
            Captura tus datos de Registro.
          </Typography>

          <TextField
            style={{ marginBottom: "30px", width: "75%" }}
            value={dataLogin.email}
            onChange={handleChange}
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <FormControl sx={{ m: 1, width: "75%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              value={dataLogin.password}
              onChange={handleChange}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "75%", marginTop:'30px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirmPassword">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              name="confirm"
              value={dataLogin.confirm}
              onChange={handleChange}
              id="outlined-adornment-confirmPassword"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <Button
            style={{ marginTop: "30px", marginBottom:'30px' }}
            onClick={handleSubmit}
            variant="contained"
          >
            Signup
          </Button>
          <Typography className="" gutterBottom variant="p" component="div">
            <span style={{marginRight:'10px'}}>Si ya estas Registrado</span>
            <Link to={'/login'}>
             ckick aqui para ingresar.
             </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default FormRegister