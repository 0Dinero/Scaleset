import React from 'react';
import styled from 'styled-components';

const Input = ({title, set , value}) => {
  return (
    <StyledWrapper>
      <div className="wave-group">
        <input
          required
          type={`${title === "Email" ? "email" : "text"}`}
          value={value}
          onChange={(e) => set(e.target.value)}
          className="input"
        />
        <span className="bar" />
        <label className="label">
          {title.split("").map((value, i) => (
            <span key={i} className="label-char" style={{ "--index": i }}>
              {value}
            </span>
          ))}
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wave-group {
    position: relative;
  }

  .wave-group .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000; /* Base border color */
    background: transparent;
    appearance: none; /* Removes default browser styles for specific input types */
    -webkit-appearance: none; /* Ensures cross-browser compatibility */
    -moz-appearance: none;
  }

  .wave-group .input:focus {
    outline: none;
  }

  .wave-group .label {
    color: black; /* Label initial color */
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }

  .wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.05s);
  }

  .wave-group .input:focus ~ label .label-char,
  .wave-group .input:valid ~ label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    color: #4820a3; /* Color when focused or valid */
  }

  .wave-group .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .wave-group .bar:before,
  .wave-group .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #4820a3; /* Bar color */
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .wave-group .bar:before {
    left: 50%;
  }

  .wave-group .bar:after {
    right: 50%;
  }

  .wave-group .input:focus ~ .bar:before,
  .wave-group .input:focus ~ .bar:after {
    width: 50%;
  }
`;


export default Input;
