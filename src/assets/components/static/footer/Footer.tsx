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
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "var(--cor-hover)", height: "40%" }}>
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
                                style={{ color: "white" }}
                            >
                                Siga-me nas redes sociais{" "}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a
                                href="https://www.linkedin.com/in/samantha-alexandra-pereira/"
                                target="_blank"
                            >
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a
                                href="https://github.com/SammyLexa"
                                target="_blank"
                            >
                                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "var(--cor-destaque)", height: "30%" }}>
                        <Box paddingTop={1}>
                            <Typography
                                variant="subtitle2"
                                align="center"
                                gutterBottom
                                style={{ color: "white" }}
                            >
                                © 2023 Copyright:
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                style={{ color: "white" , fontSize:"1rem"}}
                                align="center"
                            >
                                Desenvolvido por Samantha Alexandra Pereira
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
  )
}

export default Footer