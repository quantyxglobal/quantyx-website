import React, { memo } from 'react';
import { TextContentProps } from './types';

const TextContent: React.FC<TextContentProps> = memo(({ 
  title, 
  description, 
  cta, 
  isTransitioning = false 
}) => {
  return (
    <div 
      className={`flex flex-col justify-center space-y-6 transition-all duration-300 ease-out min-h-[400px] ${
        isTransitioning 
          ? 'opacity-0 transform translate-x-4' 
          : 'opacity-100 transform translate-x-0'
      }`}
      role="main"
      aria-label="Feature information"
      style={{
        // CSS containment for text content area
        contain: 'layout style',
        // Optimize transitions
        willChange: isTransitioning ? 'opacity, transform' : 'auto'
      }}
    >
      <h2 
        id="why-choose-heading"
        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-2"
        aria-level={2}
      >
        {title}
      </h2>
      <p 
        className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl"
        aria-describedby="why-choose-heading"
      >
        {description}
      </p>
      <div className="pt-4">
        <button 
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 w-fit shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          aria-label={`${cta} - Learn more about Quantyx services`}
          type="button"
          style={{
            // Button containment and optimization
            contain: 'layout style paint',
            willChange: 'transform, box-shadow'
          }}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo optimization
  return (
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description &&
    prevProps.cta === nextProps.cta &&
    prevProps.isTransitioning === nextProps.isTransitioning
  );
});

TextContent.displayName = 'TextContent';

export default TextContent;