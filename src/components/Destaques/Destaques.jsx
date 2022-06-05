import { Linha } from './Linha';

export function Destaques({ products }) {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "10px 0", color: '#666' }}> Destaques</h1 >
      <Linha products={products} />
      <Linha products={products} />
    </>
  )
}