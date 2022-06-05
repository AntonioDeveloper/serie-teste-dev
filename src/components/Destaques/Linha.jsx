import { Container } from './styles'

export function Linha({ products }) {
  return (
    <Container>
      <div className="product-table">
        {products.map((prod) => {
          return (
            <div className="card" key={prod.id}>
              <div className="overlay">
                <span>compra rápida</span>
              </div>
              {prod.flag !== "" ? <div className="flag">{prod.flag}</div> : <div></div>}
              <img src={prod.image} alt={prod.name} />
              <p>{prod.name}</p>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.price)}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}