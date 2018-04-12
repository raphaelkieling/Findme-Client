import gql from 'graphql-tag';

// {
//     observacao:"123",
//     dataVencimento:"1998-05-01",
//     categoriaId:"1"
// }

export const CRIAR_PEDIDO = gql`
    mutation criarPedido($pedidoCreateInput:PedidoCreateInput!){
        criarPedido(input:$pedidoCreateInput){
            id
        }
    }
`;

export const ALL_PEDIDOS_CATEGORIA = gql`
    query pedidosCategorias ($categoriasId:[ID!]!){
        pedidosCategorias(categoriasId:$categoriasId){
            observacao
            dataVencimento
            latitude
            longitude
            titulo
            categoria{
                id
                nome
                foto
            }
            cliente{
                usuario
                pessoa{
                    nome
                    sobrenome
                }
            }
        }
    }
`;

export const ALL_PEDIDOS = gql`
    query{
        pedidos{
            observacao
            dataVencimento
            latitude
            longitude
            categoria{
                id
                nome
                foto
            }
            cliente{
                usuario
                pessoa{
                    nome
                    sobrenome
                }
            }
        }
    }
`;

export const PEDIDOS_PROFISSIONAL = gql`
    query{
        pedidosProfissional{
            observacao
            dataVencimento
            latitude
            longitude
            categoria{
                id
                nome
                foto
            }
            cliente{
                usuario
                pessoa{
                    nome
                    sobrenome
                }
            }
        }
    }
`

export const PEDIDOS_CLIENTE = gql`
    query{
        pedidosCliente{
            observacao
            dataVencimento
            latitude
            longitude
            categoria{
                id
                nome
                foto
            }
            cliente{
                usuario
                pessoa{
                    nome
                    sobrenome
                }
            }
        }
    }
`