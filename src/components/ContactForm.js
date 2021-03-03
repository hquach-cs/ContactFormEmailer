import React from "react";
import "./ContactFormStyled.css";

const ContactForm = (props) => {
  return (
    <form style={{ display: props.open ? "flex" : "none" }}>
      <h2>Contact Form</h2>
      <div class="form__group field">
        <input
          type="email"
          class="form__field"
          placeholder="Email"
          name="Email"
          id="email"
          required
        />
        <label for="Email" class="form__label">
          Email
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="Message"
          id="message"
          required
        />
        <label for="message" class="form__label">
          Message
        </label>
      </div>
      <button class="form-button">Submit</button>
    </form>
  );
};

export default ContactForm;
