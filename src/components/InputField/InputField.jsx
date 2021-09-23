import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const InputField = ({ setQuery, inputValue, setInputValue }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') setQuery(inputValue);
  };

  return (
    <TextField
      label="Pesquisar restaurantes"
      outlined
      onTrailingIconSelect={() => setQuery(inputValue)}
      trailingIcon={<MaterialIcon role="button" icon="search" />}>
      <Input
        value={inputValue}
        onKeyPress={handleKeyPress}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </TextField>
  );
};

export default InputField;
