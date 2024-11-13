import React from 'react';
import { industries } from '../Data';
import { Card, Section } from './Layout';

const IndustriesSection = () => {
  return (
    <Section id="industries" className="py-32 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Transforming Industries with AI-Driven Precision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 px-4">
          {industries.map((industry, index) => (
            <div key={index}>
              <Card 
                variant="industry" 
                index={index}
                className="h-48 flex items-center justify-center p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-medium text-center">{industry}</h3>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default IndustriesSection;