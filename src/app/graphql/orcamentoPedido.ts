
import gql from 'graphql-tag';

export const ORCAMENTO_PENDENTES = gql`
    query{
        orcamentosPendentes{
            id
            profissional{
                id
                usuario
                pessoa{
                    nome
                    avatar{
                        id
                        base64
                    }
                }
            }
            pedido{
                id
                titulo
            }
            cliente{
                id
            }
        }
    }
`


export const CRIAR_ORCAMENTO = gql`
    mutation criarOrcamentoPedido($input:OrcamentoPedidoInput!){
        criarOrcamentoPedido(input:$input){
            id
        }
    }
`
