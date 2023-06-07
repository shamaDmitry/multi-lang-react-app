import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl mb-2'>
        {t('about')}
      </h1>

      <ul className="pl-3 text-xl he">
        <li>react</li>
        <li>react-router-dom</li>
        <li>react-i18next</li>
      </ul>
    </div>
  );
}

export default About;
