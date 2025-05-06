import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Button
          onClick={() => navigate('/')}
          leftIcon={<Home className="h-5 w-5" />}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;