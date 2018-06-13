import gql from 'graphql-tag';

export const CRIAR_PEDIDO = gql`
    mutation criarPedido($pedidoCreateInput:PedidoCreateInput!){
        criarPedido(input:$pedidoCreateInput){
            id
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
                    avatar{
                        base64
                        marker
                    }
                }
            }
        }
    }
`;

export const EDITAR_PEDIDO = gql`
    mutation editarPedido($pedidoEditInput:PedidoEditInput!){
        editarPedido(input:$pedidoEditInput){
            id
        }
    }
`;

export const ALL_PEDIDOS_CATEGORIA = gql`
    query pedidosCategorias ($categoriasId:[ID!]!){
        pedidosCategorias(categoriasId:$categoriasId){
            id
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
                id
                usuario
                pessoa{
                    nome
                    sobrenome
                    distanceToMe
                    avatar{
                        base64
                        marker
                    }
                }
            }
        }
    }
`;

export const ALL_PEDIDOS = gql`
    query{
        pedidos{
            id
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
                id
                usuario
                pessoa{
                    nome
                    sobrenome
                    distanceToMe
                }
            }
        }
    }
`;

export const PEDIDOS_PROFISSIONAL = gql`
    query{
        pedidosProfissional{
            id
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
                    distanceToMe
                }
            }
        }
    }
`

export const PEDIDOS_CLIENTE = gql`
    query{
        pedidosCliente{
            id
            titulo
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
                    distanceToMe
                }
            }
        }
    }
`

export const PEDIDOS_CLIENTE_FINALIZADOS = gql`
    query{
        pedidosClienteFinalizados{
            id
            titulo
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
                    distanceToMe
                }
            }
        }
    }
`

export const PEDIDO_CANCELAR = gql`
    mutation cancelarPedido($id:ID!){
        cancelarPedido(id:$id)
    }
`