// File: src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="font-serif text-4xl mb-4">Post Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        The article or page you are looking for has been moved or doesn't exist anymore.
      </p>
      <Link 
        href="/" 
        className="px-6 py-2 bg-[#1C1A17] text-white rounded-md hover:opacity-90 transition-opacity"
      >
        Return to Home
      </Link>
    </div>
  );
}