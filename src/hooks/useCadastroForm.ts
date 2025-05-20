import { useState } from 'react';
import { buscarEnderecoPorCep } from '../services/cepService';

//Descrever a forma (ou estrutura) de um objeto;
//Especifica quais propriedades um objeto deve ter e quais os tipos;

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

/**
 *  Função para gerenciar o estado de um formulário de cadastro:
 * useState: cria e gerencia o estado do formulário.
 * formData: é inicializado com um objeto que segue a estrutura definida pela interface FormData.
 * Cada propriedade do objeto (ex: nome, sobrenome) representa um campo do formulário.
**/

/**
 * 1. O estado formData é inicializado com valores vazios. 
 * 2. formData (valor atual do campo) e setFormData (func para atualizar valores do estado).
 */


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

    /**
     * useState: hook utilizado para adicionar e gerenciar estados em componentes funcionais.
     * retorna um array com dois elementos: valor atual do estado, função para atualizar o estado.
     * o valor inicial é false, pq a operacao ainda não começou.
     */
    const[loadingCep, setLoadingCep] = useState(false);
    
    /**
     * estado inicial de cep error é vazio ;
     * e é atualizado para a medida que setCepError for chamada, atribuindo um valor a ela, através do useState
     */
    
    const[cepError, setCepError] = useState('');

    /**
     * typescript deve ter o parametro tipado, como é o caso da função: buscar endereço por cep (no arquivo cepService) e handleChange 
     * handleChange: função utilizada para lidar com mudanças nos <input>, chamada sempre que o valor de <input> mudar.
     * e (é de evento) a definição é necessaria para indicar que sera um elemento HTML <input> 
     *
     * 1. e.target: elemento que disparou o evento.
     * 2. name: identifica qual campo foi alterado.
     * 3. value: valor atual do campo.
     * 4. se o campo for cep e for digitado qualquer coisa que não seja numero: mensagem de error
     * 5. senão for digitado nada fora do padrao: não marca nada de cepError
    */ 
    
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
        /**
         * utilizada para atualizar caso um dos campos for modificado,
         * ...prev: mantem os valores que já existiam
         * [name] : value -> conjunto chave e valor, pega name que consta no textfield e qual valor foi atribuido a ele 
         * ex: nome: kalu, foi modificado para nome:kaluanã, e todos os outros campos permanecessem preservado.
         */
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
            setCepError('Número de Cep incorreto, verifique e tente novamente!');
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
