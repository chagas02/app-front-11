import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import match from './image/match.png';
import './style.css';


export default function Login() {
  return (
    <Box
         sx={{
           backgroundColor:'#454d6b',
           color: '#ffffff',
           p: 2,
         }}

    >
    <form>

          <div className="divhead">
                <img className="img-logo" src={match}/>

                <Typography sx={{ml:5}} variant="h4">
                    Entrar no We Macth!
                </Typography>
          </div>

          <div className="acesso">
            <TextField color="error" style={{marginBottom: 20}} fullWidth label="Nome de usuário, e-mail ou celular" variant="standard" /><br/>
            <TextField color="error" fullWidth label="Senha" variant="standard"/> <br/>

          </div>

          <div className="button">
              <Button fullWidth color="error" size="large" variant="contained">Avançar</Button>
          </div>

          <div className="ancora" >

              <Link href="#" color="white" underline="none">
                  {'Esqueceu a senha?'}
              </Link>
          </div>
          <div className="button">
            <Button fullWidth color="error" size="large" variant="outlined"> Criar uma conta</Button>
          </div>

    </form>

    </Box>
  );
}
