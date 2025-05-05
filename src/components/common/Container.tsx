import React, { memo } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  id,
  size = 'lg'
}) => {
  // Podstawowa klasa kontenera, która jest współdzielona przez wszystkie instancje
  const containerClass = `container mx-auto px-4 sm:px-6 lg:px-8 ${className}`;
  
  return (
    <Component className={containerClass} id={id}>
      {children}
    </Component>
  );
};

export default memo(Container); 