import React, { useState, useEffect } from "react";
import Label from "../atoms/Label";

interface Option {
  id: string | number;
  label: string;
  value: string | number;
}

interface SelectMenuProps {
  className?: string;
  label: string;
  options?: Option[];
  placeholder?: string;
  onChange?: (value: Option | null) => void;
  value?: Option | null;
}

const SelectMenu = ({
  className,
  label,
  options: propOptions,
  placeholder = "Search...",
  onChange,
  value,
}: SelectMenuProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const defaultOptions: Option[] = [
    { id: 1, label: "Inconvenientes", value: "inconvenientes" },
    { id: 2, label: "Solicitudes", value: "solicitudes" },
    { id: 3, label: "Garantías", value: "garantias" },
    { id: 4, label: "Mantenimientos", value: "mantenimientos" },
  ];

  const options = propOptions || defaultOptions;

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Label text={label} />
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={value?.label}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-center text-gray-500">
                No options found
              </div>
            ) : (
              filteredOptions.map(option => (
                <div
                  key={option.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectMenu;
