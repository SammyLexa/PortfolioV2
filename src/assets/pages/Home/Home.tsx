import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';


function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "var(--cor-primaria)",}} flexDirection={{xs:"column-reverse", md:"row"}} className='containerResponsivo'>
        <Grid alignItems="center" item xs={12} md={6}>
          <Box paddingX={{ xs: 3, md: 20 }} paddingY={{ xs:10 , md: 20 }}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "var(--cor-hover)", fontWeight: "bold", fontSize:"var(--tamanho-titulo)" }}>Desenvolvedora Full Stack</Typography>
            <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "white", fontWeight: "bold" , fontSize:"var(--tamanho-paragrafo)"}}>Olá! Sou <strong className='sammy'>Samantha Alexandra Pereira</strong>, desenvolvedora Full Stack e estou aprimorando os meus conhecimentos de <strong className=''>React, HTML, CSS e Java</strong>. Ansiosa para aprender e crescer na área de desenvolvimento web.</Typography>
          </Box>
          <Box display="flex" justifyContent="center" style={{flexDirection:"column", textAlign:"center", paddingBottom: "2rem", gap: "1rem"}} >
          <Typography variant="h6" gutterBottom color="textPrimary" component="p" align="center" style={{ color: "white", fontWeight: "bold" , fontSize:"var(--tamanho-paragrafo)"}}>Siga-me nas rede sociais:</Typography>
            <Box marginRight={1}>
            </Box>
            <a href="https://www.linkedin.com/in/samantha-alexandra-pereira/" target="_blank">  
                <Button className='botao' variant="outlined" style={{ borderColor: "white", backgroundColor: "var(--cor-terciaria)", color: "black" }}>LinkedIn</Button>
            </a>
            <a href="https://github.com/SammyLexa" target="_blank">  
              <Button className='botao' variant="outlined" style={{ borderColor: "white", backgroundColor: "var(--cor-terciaria)", color: "black" }}>GitHub</Button>
            </a> 
            <a href="https://github.com/SammyLexa/Portfolio" target="_blank">
              <Button className='botao' variant="outlined" style={{ borderColor: "white", backgroundColor: "var(--cor-terciaria)", color: "black" }}>Portfolio</Button>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} paddingY={{ xs:10 , md: 20 }}>
          <img src="Samantha Linkedin.jpg" alt="Imagem de Samantha" className='imagemHome'/>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  )
}

export default Home