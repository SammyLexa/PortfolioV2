import React from 'react'
import './Portfolio.css'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Portfolio() {
    return (
        <>
            <Grid container direction={'row'} textAlign={'center'} justifyContent={'center'} spacing={3} paddingX={3} paddingY={'10%'} className='containerPortfolio'>
                <Grid item xs={12} md={12}>
                    <Box justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24} >
                            <CardMedia
                                sx={{ height: 640 }}
                                image="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/Group_10.png?updatedAt=1681906041994"
                                title="Site"
                            />
                            <CardContent className='card'>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            Grafeat: Parte da Arte
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography textAlign={'justify'} className='card' >
                                            O software será um e-commerce focado na venda e promoção de produtos artesanais produzidos por pessoas em vulnerabilidade econômica e social. Na versão inicial do projeto focaremos na comunidade do grafite e suas confecções. Nosso site servirá de vitrine para todos os produtos relacionados à arte e grafite, onde o vendedor poderá criar um usuário e adicionar uma breve biografia, seus produtos e características. Quando os produtos já estiverem cadastrados será possível realizar consulta e atualização por nome, categoria, preço, e, se necessário, realizar a exclusão de itens. O projeto será sem fins lucrativos, cobrando apenas uma pequena taxa dos produtos para manutenção do site.
                                        </Typography>
                                        <Typography textAlign={'justify'} className='card' >Desenvolvido em Java, Spring, Insomnia e MySQL no Back-End e React, TypeScript, HTML, CSS, Material UI, React Router no Front-End.</Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Insominia-8B89CC?style=for-the-badge&logoColor=white" alt="Insomnia" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                    </Typography>
                                    <Typography ><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                                    </Typography>


                                    <Typography ><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                                    </Typography>


                                    <Typography ><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="" />
                                    </Typography>
                                    <Typography ><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>
                                <a className='link' href='https://github.com/SammyLexa/Blog-Pessoal' target='blank'><Button size="small" className='link'>Repositório Back-End</Button></a>
                                <a className='link' href='https://github.com/SammyLexa/Blog-Pessoal-FrontEnd' target='blank'><Button size="small" className='link'>Repositório Front-End</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box className='card' justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image="https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/Front-End__1_.png?updatedAt=1681773842486"
                                title="Site"
                            />
                            <CardContent className='card'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            Blog Pessoal
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='card'  >
                                            Projeto de Blog Pessoal desenvolvido no bootcamp da Generation Brasil, desenvolvido em Java, Spring, Insomnia e MySQL no Back-End e React, TypeScript, HTML, CSS, Material UI, React Router no Front-End.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Insominia-8B89CC?style=for-the-badge&logoColor=white" alt="Insomnia" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                    </Typography>
                                    <Typography ><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                                    </Typography>


                                    <Typography ><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                                    </Typography>


                                    <Typography ><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="" />
                                    </Typography>
                                    <Typography ><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>
                                <a className='link' href='https://github.com/SammyLexa/Blog-Pessoal' target='blank'><Button size="small" className='link'>Repositório Back-End</Button></a>
                                <a className='link' href='https://github.com/SammyLexa/Blog-Pessoal-FrontEnd' target='blank'><Button size="small" className='link'>Repositório Front-End</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box className='card' justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image="https://ik.imagekit.io/sammylexa/Portfolio/JIIN.png?updatedAt=1681611772963"
                                title="Site"
                            />
                            <CardContent className='card'>


                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            JIIN Livros: Organizado como Mágica
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='card'  >
                                            Um sistema para organizar e gerenciar livros de uma bliblioteca, capaz de cadastrar, deletar, atualizar e consultar livros. Desenvolvido na Linguagem Java.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>
                                <a className='link' href='https://github.com/SammyLexa/projetoJava-JiinLivros' target='blank'><Button size="small" className='link'>Repositório</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>


                <Grid item xs={12} md={4}>
                    <Box className='card' justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image="https://ik.imagekit.io/sammylexa/Portfolio/img/Telas.png?updatedAt=1681612503743"
                                title="Site"
                            />
                            <CardContent className='card'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            Site Promocional do Alura + com o Alura Língua
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='card'  >
                                            Este projeto é site do Combo Promocional da Alura+ com o Alura Língua para treinar HTML e CSS.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>
                                <a className='link' href='https://alura-plus-alura-lingua-git-main-sammylexa.vercel.app/'><Button size="small" className='link'>Site</Button></a>
                                <a className='link' href='https://github.com/SammyLexa/AluraPlus-AluraLingua' target='blank'><Button size="small" className='link'>Repositório</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box className='card' justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image="https://ik.imagekit.io/sammylexa/Portfolio/Fruta.jpg?updatedAt=1681611328336"
                                title="Site"
                            />
                            <CardContent className='card'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            Fruta & Fruto
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='card' >
                                            Site "Fruta & Fruto" desenvolvido no curso do Alura: "Arquitetura CSS: descomplicando problemas", onde criamos um site com a metodologia Atomic Design, criando um arquivo para cada CSS e, dessa forma, mantendo nossos códigos curtos e simples, facilitando a manutenção.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>
                                <a className='link' href='https://fruta-fruto-samantha-sammylexa.vercel.app/'><Button size="small" className='link'>Site</Button></a>
                                <a className='link' href='https://github.com/SammyLexa/Alura_Arquitetura_CSS_Fruta-Fruto' target='blank'><Button size="small" className='link'>Repositório</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box className='card' justifyContent={'center'}>
                        <Card sx={{ maxWidth: '100%' }} elevation={24}>
                            <CardMedia
                                sx={{ height: 440 }}
                                image="https://ik.imagekit.io/sammylexa/Crud_Games/Cute_Unicorn.png?updatedAt=1681617788645"
                                title="Site"
                            />
                            <CardContent className='card'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography gutterBottom variant="h5" component="div" className='titulo'>
                                            CRUD de Loja de Games
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='card'  >
                                            Projeto desenvolvido em Java, Spring, Insomnia e MySQL, capaz de cadastrar, consultar, atualizar e deletar produtos.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Box alignItems={'center'} paddingTop={'5px'} display={'flex'} justifyContent={'center'} style={{ flexWrap: 'wrap' }} >
                                    <Typography ><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/Insominia-8B89CC?style=for-the-badge&logoColor=white" alt="Insomnia" />
                                    </Typography>

                                    <Typography ><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className='card'>

                                <a className='link' href='https://github.com/SammyLexa/CRUD-Loja-de-Games' target='blank'><Button size="small" className='link'>Repositório Back-End</Button></a>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>


            </Grid>
        </>
    )
}

export default Portfolio



