import * as React from 'react';
import { Grid, Button, Box, TextField, useTheme } from '@mui/material';
import { useCadastroForm } from '../hooks/useCadastroForm';
import { containerBoxStyle, formBoxStyle } from '../style/ItemStyles';

export default function FormularioDeCadastro() {
  const { formData, handleChange, handleSubmit, loadingCep } = useCadastroForm();
  const theme = useTheme();

  return (
    <Box sx={containerBoxStyle}>
      <Box component='form' onSubmit={handleSubmit} sx={formBoxStyle}>
        <Grid container spacing={2}>
          {/* Nome */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Informar o primeiro nome"
              id="campo-nome"
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Sobrenome */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Informar o sobrenome"
              id="campo-sobrenome"
              label="Sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* E-mail */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="exemplo@email.com"
              id="campo-email"
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* CEP */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Ex: 20020080"
              id="campo-cep"
              label="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              disabled={loadingCep}
              required
            />
          </Grid>

          {/* Rua */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Endereço completo"
              id="campo-rua"
              label="Endereço completo"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
            />
          </Grid>

          {/* Número */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Número"
              id="campo-numero"
              label="Número"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Complemento */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Complemento"
              id="campo-complemento"
              label="Apartamento/Casa"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
            />
          </Grid>

          {/* Bairro */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Bairro"
              id="campo-bairro"
              label="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
          </Grid>

          {/* Cidade */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Cidade"
              id="campo-cidade"
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
          </Grid>

          {/* Estado */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              helperText="Estado"
              id="campo-estado"
              label="Estado"
              name="uf"
              value={formData.uf}
              onChange={handleChange}
            />
          </Grid>

          {/* Botões */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" sx={{ marginRight: 2 }}>
              Login
            </Button>
            <Button variant="contained" type="submit">
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}