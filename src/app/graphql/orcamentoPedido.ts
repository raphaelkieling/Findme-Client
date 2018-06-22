
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

export const ACEITAR_ORCAMENTO = gql`
    mutation aceitarOrcamentoPedido($idPedido:ID!){
        aceitarOrcamentoPedido(idPedido:$idPedido)
    }
`

export const CANCELAR_ORCAMENTO = gql`
    mutation cancelarOrcamentoPedido($idPedido:ID!){
        cancelarOrcamentoPedido(idPedido:$idPedido)
    }
`

