import React from "react";
import { CardItem }  from "../components/Card";
import { Box, Typography } from "@mui/material";
import FormularioDeCadastro from "../components/inputs";
import exempleImage from './logo-black.png';

const Cadastro= () => {
    return (
        <Box padding={4} sx={{ flexGrow:2 }}>
            <CardItem
            imageSrc={exempleImage}
            title="Lorem Ipsum"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            id="1030114"
            ></CardItem>
            <FormularioDeCadastro /> 
        </Box>
    )
}

export default Cadastro;