/* eslint-disable import/extensions */

import React from 'react';

import { i18n, useTranslation } from '../../../i18n';
import { Container } from './styles';

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
        }
      >
        {t('common:change-locale')}
      </button>
    </Container>
  );
};

export default Navigation;
