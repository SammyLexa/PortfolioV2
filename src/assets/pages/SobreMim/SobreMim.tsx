import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import './SobreMim.css'

function SobreMim() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "var(--cor-primaria)", }} className='containerSobre'>


                <Grid item xs={12} md={6} paddingY={{ xs: 10, md: 20 }}>
                    <img src="https://ik.imagekit.io/sammylexa/Portfolio/Samantha_Linkedin.jpg?updatedAt=1681603221883" alt="Imagem de Samantha" className='imagemSamantha' />
                </Grid>

                <Grid alignItems="center" item xs={12} md={6}>
                    <Box paddingX={{ xs: 3, md: 20 }} paddingY={{ xs: 5, md: 10 }}>
                        <Typography className='textoSobre' variant="h3" gutterBottom component="h3" align="center" style={{ color: "var(--cor-hover)", fontWeight: "bold", fontSize: "var(--tamanho-titulo)" }}>Sobre mim</Typography>
                        <Typography variant="h6" gutterBottom component="h6" align="justify" style={{ color: "white", fontWeight: "bold", fontSize: "var(--tamanho-paragrafo)" }}>Sou aspirante a <strong className='destaque'>Desenvolvedora Web Full Stack</strong>, estou ansiosa para aprender e crescer na área de desenvolvimento web. Minha paixão por criar páginas web úteis, envolventes, acessíveis e fáceis de usar me levou a seguir a carreira de desenvolvimento.💻</Typography>

                        <Typography variant="h6" gutterBottom component="h6" align="justify" style={{ color: "white", fontWeight: "bold", fontSize: "var(--tamanho-paragrafo)" }}>Embora eu seja nova no área, concluí cursos de HTML, CSS, JavaScript, Java e também ganhei experiência trabalhando em projetos pessoais para aprimorar minhas habilidades. Estou familiarizada com os framework React, Spring e Insomnia, e me sinto confortável trabalhando com várias ferramentas de desenvolvimento, como Git, VSCode, STS ou Eclipse.💜</Typography>

                        <Typography variant="h6" gutterBottom component="h6" align="justify" style={{ color: "white", fontWeight: "bold", fontSize: "var(--tamanho-paragrafo)" }}>Estou animada para contribuir com minhas habilidades e aprender com desenvolvedores experientes para criar aplicativos da Web de ponta. Possuo um perfil com disposição para o aprendizado e aprimoramento contínuos que me permite aprender novas tecnologias com facilidade e velocidade.</Typography>

                        <Typography variant="h6" gutterBottom component="h6" align="justify" style={{ color: "white", fontWeight: "bold", fontSize: "var(--tamanho-paragrafo)" }}>Entendo que esta profissão requer um alto nível de adaptabilidade e habilidades de resolução de problemas, e estou confiante em minhas capacidades. Não tenho medo de fazer perguntas ou buscar ajuda quando necessário e estou empenhada em me manter atualizada com as últimas tendências e melhores práticas para ser uma desenvolvedora bem-sucedida e de excelência.</Typography>
                    </Box>
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}

export default SobreMim;
