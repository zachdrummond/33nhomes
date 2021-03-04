import React from "react";

const Contact = () => {
  return (
    <section className="my-5">
      <form class="row g-3">
        <h2 className="text-center">Tell Us About Your Project</h2>
        {/* --------------------------------------------------------------- FIRST & LAST NAME */}
        <div class="col-md-6">
          <label for="name">First and Last Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="First Name Last Name"
          />
        </div>
        {/* --------------------------------------------------------------- PHONE NUMBER */}
        <div class="col-md-6">
          <label for="phone">Phone Number</label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="XXX-XXX-XXXX"
          />
        </div>
        <div class="col-md-12">
          {/* --------------------------------------------------------------- EMAIL ADDRESS */}
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        {/* --------------------------------------------------------------- ADDRESS */}
        <div class="col-12">
          <label for="address" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="1234 Main St"
          />
        </div>
        {/* --------------------------------------------------------------- CITY */}
        <div class="col-md-6">
          <label for="city" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="city" />
        </div>
        {/* --------------------------------------------------------------- STATE */}
        <div class="col-md-4">
          <label for="state" class="form-label">
            State
          </label>
          <input type="text" class="form-control" id="state" />
        </div>
        {/* --------------------------------------------------------------- ZIP CODE */}
        <div class="col-md-2">
          <label for="zip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="zip" />
        </div>
        {/* --------------------------------------------------------------- DESCRIPTION */}
        <div class="col-md-12">
          <label for="description">Briefly Describe Your Project</label>
          <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
        {/* --------------------------------------------------------------- PICTURES */}
        <div class="col-md-4">
          <label for="picture1" class="form-label">
            Picture 1
          </label>
          <input class="form-control" type="file" id="picture1" />
        </div>
        <div class="col-md-4">
          <label for="picture2" class="form-label">
            Picture 2
          </label>
          <input class="form-control" type="file" id="picture2" />
        </div>
        <div class="col-md-4">
          <label for="picture3" class="form-label">
            Picture 3
          </label>
          <input class="form-control" type="file" id="picture3" />
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
