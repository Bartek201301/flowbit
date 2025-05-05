import React, { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  bgColor?: string;
  id?: string;
  withContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  containerSize = 'lg',
  bgColor = 'bg-white',
  id,
  withContainer = true,
}) => {
  const sectionClasses = `py-16 md:py-24 ${bgColor} ${className}`;

  return (
    <section className={sectionClasses} id={id}>
      {withContainer ? (
        <Container className={containerClassName} size={containerSize}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
};

export default Section; 