import React from "react";

const Contact = () => {
  return (
    <section className="my-5">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="First Name Last Name"
        />
        <label for="floatingInput">First and Last Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="Last Name"
        />
        <label for="floatingPassword">Last Name</label>
      </div>
    </section>
  );
};

export default Contact;
