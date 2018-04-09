import gql from 'graphql-tag';

export const CRIA_PROFISSIONAL = gql`
    mutation criarNovoProfissional($criarProfissionalInput: criarProfissionalInput!){
        criarProfissional(input: $criarProfissionalInput){
            usuario
            pessoa{
                nome
                enderecos{
                    cep
                }
            }
        }
    }
`;

export const EDITAR_PROFISSIONAL = gql`
    mutation editarProfissional($editaProfissionalParams: editaProfissionalInput!){
        editarProfissional(input: $editaProfissionalParams){
            usuario
            pessoa{
                nome
                sobrenome
            }
        }
    }
`;