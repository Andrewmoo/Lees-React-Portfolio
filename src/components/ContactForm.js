/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .success {
    color: var(--success);
  }
`;

export default function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/mqkwqkrw',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks! Ill get back to you ASAP', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <FormStyle onSubmit={handleOnSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" type="name" name="name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" name="email" required />
        </label>
        <label htmlFor="message">
          Message:
          <textarea id="message" name="message" />
        </label>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <h1 className={!serverState.status.ok ? 'errorMsg' : ''}>
            <span className="success">{serverState.status.msg}</span>
          </h1>
        )}
      </FormStyle>
    </div>
  );
}
