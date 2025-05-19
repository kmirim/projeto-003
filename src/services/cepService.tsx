// cepService.js
// buscar o endereço com base no cep(api externa)

import axios from 'axios';

export async function buscarEnderecoPorCep(cep: string) {
  // Limpa o CEP só com números
  cep = cep.replace(/\D/g, '');

  if (cep.length !== 8) {
    throw new Error('CEP inválido');
  }

  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  if (response.data.erro) {
    throw new Error('CEP não encontrado');
  }

  return {
    rua: response.data.logradouro,
    cidade: response.data.localidade,
    bairro: response.data.bairro,
    uf: response.data.uf,
  };
}
