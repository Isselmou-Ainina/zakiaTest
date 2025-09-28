import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'fr' as Language, name: 'Français' },
    { code: 'ar' as Language, name: 'العربية' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center justify-center p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary border border-primary/20 hover:border-primary/30">
        <Globe className="h-5 w-5" />
      </button>
      
      <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-primary/5 text-primary' : 'text-gray-700'
            }`}
            style={{ direction: lang.code === 'ar' ? 'rtl' : 'ltr' }}
          >
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
