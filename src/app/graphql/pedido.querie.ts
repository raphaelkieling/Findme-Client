import gql from 'graphql-tag';

export const CRIAR_PEDIDO = gql`
    mutation criarPedido($pedidoCreateInput:PedidoCreateInput!){
        criarPedido(input:$pedidoCreateInput){
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
                id
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
                id
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