import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Leaf, ShieldCheck } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { getFeaturedProducts } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fresh vegetables"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Farm-Fresh Vegetables Delivered to Your Door</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Locally sourced, organic produce picked at peak freshness and delivered straight to your home. Taste the difference of truly fresh vegetables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/shop'}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
                onClick={() => window.location.href = '#about'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Leaf className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-neutral-600">
                All our products are certified organic, grown without harmful pesticides or chemicals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Truck className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-neutral-600">
                Free home delivery on all orders over $35. Same-day delivery available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-neutral-600">
                Not satisfied? We offer a 100% money-back guarantee on all our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/shop" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Organic farm" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">From Our Farm to Your Table</h2>
              <p className="text-neutral-700 mb-4">
                At Fresh Greens, we believe in providing the freshest, highest-quality produce to our customers. 
                Our vegetables are grown locally using sustainable farming practices and harvested at the peak 
                of their freshness.
              </p>
              <p className="text-neutral-700 mb-6">
                We work directly with small family farms to ensure fair compensation for farmers and the best 
                prices for our customers. By cutting out the middleman, we're able to deliver produce that's 
                often harvested just hours before it reaches your door.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            Sign up to receive updates on new products, seasonal specials, and healthy recipes using our farm-fresh vegetables.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-md border-y border-l border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;