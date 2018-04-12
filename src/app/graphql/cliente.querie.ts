import gql  from 'graphql-tag';

export const CRIAR_CLIENTE = gql`
    mutation criarNovoCliente($criarClienteInput: criarClienteInput!){
        criarCliente(input: $criarClienteInput){
            usuario
            pessoa{
                nome
                enderecos{
                    cep
                }
            }
        }
    }
`