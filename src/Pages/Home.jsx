import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className='container mx-auto px-4 text-center'>
      <h1 className='text-2xl mb-2'>
        {t('title')}
      </h1>

      <h2 className="text-xl">
        {t('label')}
      </h2>
    </section>
  );
}

export default Home;