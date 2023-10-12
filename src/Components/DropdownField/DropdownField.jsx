import React, { useEffect, useRef, useState } from 'react';
import { DropdownContainer, DropdownHeader, DropdownListContainer, DropdownListItem } from './styled';
import isEmpty from 'lodash-es/isEmpty';

const Dropdown = ({ options, field, form, onChange, disabled, errorMessage, defaultMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const ref = useRef();

  const toggling = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const onOptionClicked = value => () => {
    form.setFieldValue(field.name, value);
    setIsOpen(false);
    onChange(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={toggling}>
        {field.value || "Select option..."}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          {isEmpty(options) ? (
            <div style={{ textAlign: 'center' }}>{defaultMessage}</div>
          ) :
            options.map(option => (
              <DropdownListItem
                key={option}
                onClick={onOptionClicked(option)}
              >
                {option}
              </DropdownListItem>
            ))}
        </DropdownListContainer>
      )}
      {showError && (
        <span style={{ position: 'absolute', top: '40px', left: '5px', color: 'red' }}>{errorMessage}</span>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;