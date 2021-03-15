import React, { useState } from "react";
import axios from "axios";
import "./ContactFormStyled.css";

const initialFormData = {
  Name: "",
  Email: "",
  Subject: "",
  Message: "",
};

const ContactForm = (props) => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: formData,
    }).then((response) => {
      if (response.data.status === 1) {
        alert("Message sent");
        this.resetForm();
      } else if (response.data.status === 0) {
        alert("Message failed to send");
      }
    });
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form style={{ display: props.open ? "flex" : "none" }}>
      <h2>Contact Form</h2>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="Name"
          id="name"
          onChange={handleChange}
          required
        />
        <label htmlFor="Name" className="form__label">
          Name
        </label>
      </div>
      <div className="form__group field">
        <input
          type="email"
          className="form__field"
          placeholder="Email"
          name="Email"
          id="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="Email" className="form__label">
          Email
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Subject"
          name="Subject"
          id="subject"
          onChange={handleChange}
          required
        />
        <label htmlFor="Subject" className="form__label">
          Subject
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="Message"
          id="message"
          onChange={handleChange}
          required
        />
        <label htmlFor="Message" className="form__label">
          Message
        </label>
      </div>
      <button type="button" className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
