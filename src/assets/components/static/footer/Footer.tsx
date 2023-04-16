import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box display={'flex'} alignItems="center" width={'100%'} justifyContent={'space-around'} style={{ background: "rgb(138,43,226)", height: '150px' }}>
                    <Box >
                        <Box
                            paddingTop={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h5"
                                align="center"
                                gutterBottom
                                style={{ color: 'white', fontSize:"1.3rem" }} className='footer'
                            >
                                Siga-me nas redes sociais{' '}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a
                                href="https://github.com/SammyLexa"
                                target="_blank"
                            >
                                <GitHubIcon style={{ fontSize: 60, color: 'white' }} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/samantha-alexandra-pereira/"
                                target="_blank"
                            >
                                <LinkedInIcon style={{ fontSize: 60, color: 'white' }} />
                            </a>
                        </Box>
                    </Box>
                    <Box >
                        <Box paddingTop={1}>
                            <Typography
                                variant="h5"
                                align="center"
                                gutterBottom
                                style={{ color: 'white', fontSize:"1.3rem" }}
                                component={'span'} className='footer'
                            >
                                © 2023 Copyright: {' '}
                            </Typography>

                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    style={{ color: 'white', fontSize:"1.3rem" }}
                                    align="center"
                                    component={'span'} className='footer'
                                >
                                    Desenvolvido por Samantha Alexandra
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Footer