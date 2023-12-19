import React, { useState, useEffect } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Validate username
    if (formData.username.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Validate password
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters long' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.username}</span>
      </div>

      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
