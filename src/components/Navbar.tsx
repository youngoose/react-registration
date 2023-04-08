import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const [step, setStep] = useState('');

  useEffect(() => {
    const paths = [/basic/, /pokemon/, /review/];

    paths.forEach((path, index) => {
      if (pathname.match(path)) {
        index === 0
          ? setStep('- step 1')
          : index === 1
          ? setStep('- step 2')
          : setStep('- review');
      }
    });
  }, [pathname]);

  return (
    <nav className="m-5 text-lg font-extrabold text-gray-900 md:text-2xl lg:text-3xl uppercase">
      {`User Registration Form ${step}`}
    </nav>
  );
}
