import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// This component will be used to create a text area with a character limit
const TextAreaWithLimit = ({ maxLength, name, value, onChange }) => {
  const [text, setText] = useState(value || '');

  function handleChange(e) {
    const { value } = e.target;
    if (value.length <= maxLength) {
      setText(value);
      onChange(e);
    }
  }

  return (
    <section>
      <textarea
        name={name}
        maxLength={maxLength}
        onChange={handleChange}
        value={text}
        className="form-input"
      />
      <div>
        <p>{text.length}/{maxLength} characters</p>
      </div>
    </section>
  );
};

export default TextAreaWithLimit;
