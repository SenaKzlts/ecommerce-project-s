
import ProductCard from '../components/ProductCard'

function HomePage() {
  const products = [
    {
      name: 'Product 1',
      image: 'product1.jpg',
      description: 'Description 1',
      price: '$10',
    },
    {
      name: 'Product 2',
      image: 'product2.jpg',
      description: 'Description 2',
      price: '$20',
    },
  ]

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">
        Home
      </h1>

      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}

export default HomePage
