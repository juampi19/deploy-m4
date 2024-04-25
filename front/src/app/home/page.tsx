import { Metadata } from 'next';
import { Container } from '../components/container/Container';
import { Products } from '../components/products/Products';
import { Hero } from '../components/hero/Hero';


export const metadata: Metadata = {
  title: "MyPoint - Home",
  description: "MyPoint es una página para encontrar tus mejores productos tecnologicos a mejores precios",
};

export default function HomePage() {
  return (
    <main className='bg-gray-100'>
      <Hero />
        <Container>
        <h1 className="text-4xl font-semibold py-3">The best Offerts</h1>
          <Products />
        </Container>
      </main>
  );
}