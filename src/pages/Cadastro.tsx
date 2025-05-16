import React from "react";
import { CardItem }  from "./Card";
import { Box, Typography } from "@mui/material";


const Cadastro= () => {
    return (
        <Box padding={4} sx={{ flexGrow:2 }}>
            <CardItem
            imageSrc="/static/images/grid/complex.jpg"
            title="Standard license"
            description="Full resolution 1920x1080 • JPEG"
            id="1030114"
            price="$19.00"
            />
            //incluir inputs: 
        </Box>
    )
}

export default Cadastro;