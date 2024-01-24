import React from 'react';

interface ISearchItem {
  city: string;
  handleOptionClick: (city: string) => void;
}

export const SearchItem = ({ city, handleOptionClick }: ISearchItem) => {
  return (
    <div className="hover:bg-gray-200 cursor-pointer p-2" onClick={() => handleOptionClick(city)}>
      {city}
    </div>
  );
};
