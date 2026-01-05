import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
      aria-label="Switch language"
    >
      <Languages size={16} />
      <span className="hidden md:inline">{i18n.language === 'zh-TW' ? 'EN' : '中文'}</span>
    </button>
  );
};
