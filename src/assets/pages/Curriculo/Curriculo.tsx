import React from 'react'
import './Curriculo.css'
import { Box, Grid, Typography } from '@mui/material';


function Curriculo() {
    return (
        <>
            <Grid container textAlign={'center'} justifyContent={'center'} >
                <Grid item xs={8} >
                    <Box >
                        <Typography className='tituloCurriculo'>Samantha Alexandra Pereira</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Curriculo