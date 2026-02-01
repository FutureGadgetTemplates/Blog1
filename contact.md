---
layout: page
title: Contact
subtitle: Get in touch with us
permalink: /contact/
---

## We'd Love to Hear From You

Whether you have a question, feedback, or just want to say hello, we're here to help.

## Contact Information

- **Email:** [your-email@example.com](mailto:your-email@example.com)
- **Twitter:** [@your_twitter](https://twitter.com/your_twitter)
- **LinkedIn:** [Your Name](https://linkedin.com/in/your_linkedin)

## Send Us a Message

<form class="contact-form" action="#" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" required>
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Send Message</button>
</form>

<style>
.contact-form {
  max-width: 600px;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}
</style>
