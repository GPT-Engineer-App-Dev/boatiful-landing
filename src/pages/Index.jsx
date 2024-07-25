import React from 'react';
import { Anchor, Compass, Wind } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6">
    <CardHeader>
      <Icon size={48} className="text-blue-500 mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sail Away</h1>
        <p className="text-xl text-gray-600">Discover the Freedom of the Open Water</p>
      </header>

      <section className="mb-12">
        <img src="/placeholder.svg" alt="Beautiful sailboat on the ocean" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Anchor}
            title="Expert Guidance"
            description="Our experienced team ensures your safety and enjoyment on every voyage."
          />
          <FeatureCard 
            icon={Compass}
            title="Diverse Destinations"
            description="Explore breathtaking coastlines and hidden coves around the world."
          />
          <FeatureCard 
            icon={Wind}
            title="Top-notch Fleet"
            description="Choose from our wide range of well-maintained boats for any occasion."
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Set Sail?</h2>
        <p className="text-xl text-gray-600 mb-6">Book your nautical adventure today and create unforgettable memories.</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Book Now
        </Button>
      </section>

      <footer className="text-center text-gray-500">
        <p>&copy; 2023 Sail Away. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;