import { useState } from 'react';
import { buscarEnderecoPorCep } from '../services/cepService';

export interface FormData{
    nome: string;
    sobrenome: string;
    email: string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    bairro: string;
    uf: string;
}

export function useCadastroForm(){
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        sobrenome: '',
        email: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        uf: '',
    });

    const[loadingCep, setLoadingCep] = useState(false);
    const[cepError, setCepError] = useState('');

    // typescript deve ter o parametro tipado, como é o caso do buscar endereço por cep (no arquivo cepService) e handleChange 
    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if(name === 'cep')
        {
          if(!/^\d*$/.test(value)){
            setCepError("Digite somente números!");
            return;
          }
          else{
            setCepError('');
          }
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    
        if (name === 'cep' && value.length === 8) {
          setLoadingCep(true);
          try {
            const endereco = await buscarEnderecoPorCep(value);
            setFormData(prev => ({
              ...prev,
              rua: endereco.rua,
              cidade: endereco.cidade,
              bairro: endereco.bairro,
              uf: endereco.uf,
            }));
          } 
          catch (error) {
            alert((error as Error).message);
            setFormData(prev => ({ 
              ...prev, 
              rua: '',
              cidade: '', 
              bairro: '', 
              uf: ''
            }));
          } 
          finally {
            setLoadingCep(false);
          }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("enviado", formData);
    };
    return{
        formData,
        handleChange,
        handleSubmit,
        loadingCep,
        cepError,
    };
}
