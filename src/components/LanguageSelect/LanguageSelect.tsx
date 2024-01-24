import React, { useState } from 'react';
import i18n from 'i18next';

import LanguageImg from '../../images/material-language.svg';
import ChevronDown from '../../images/chevron-down.svg';
import ChevronUp from '../../images/chevron-up.svg';

const language = [
  { title: 'EN', name: 'en' },
  { title: 'UA', name: 'ua' },
  { title: 'HE', name: 'he' },
];

export const LanguageSelect = () => {
  const storedLanguage = localStorage.getItem('language');
  const defaultLanguage = 'en';

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    (storedLanguage && storedLanguage.toUpperCase()) || defaultLanguage,
  );

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language.toUpperCase());
    setDropdownOpen(false);
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="container mx-auto flex justify-end">
      <div className="relative">
        <div className="flex cursor-pointer items-center" onClick={toggleDropdown}>
          <img src={LanguageImg} alt="language" className="pr-1.5" />
          <span className="text-gray">{selectedLanguage}</span>
          <img src={isDropdownOpen ? ChevronUp : ChevronDown} alt="Chevron" className="ml-1" />
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-2 rounded border bg-white p-2">
            {language.map((el, index) => (
              <div
                className="cursor-pointer"
                onClick={() => handleLanguageChange(el.name)}
                key={index}
              >
                {el.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
