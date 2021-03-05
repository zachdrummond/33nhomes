const Contact = ({id}) => {
  return (
    <section id={id} className="my-5">
      <form className="row g-3">
        <h2 className="text-center">Tell Us About Your Project</h2>
        {/* --------------------------------------------------------------- FIRST & LAST NAME */}
        <div className="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="First Name Last Name"
              required
            />
            <label for="name">First and Last Name</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- PHONE NUMBER */}
        <div className="col-md-6">
          <div class="form-floating">
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="XXX-XXX-XXXX"
              required
            />
            <label for="phone">Phone Number</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- EMAIL ADDRESS */}
        <div className="col-md-12">
          <div class="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
            <label for="email">Email Address</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- ADDRESS */}
        <div className="col-12">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
            <label for="address" className="form-label">
              Address
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- CITY */}
        <div className="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City Name"
            />
            <label for="city" className="form-label">
              City
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- STATE */}
        <div className="col-md-4">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State Name"
            />
            <label for="state" className="form-label">
              State
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- ZIP CODE */}
        <div className="col-md-2">
        <div class="form-floating">
          <input type="text" className="form-control" id="zip" placeholder="Zip Code" required/>
          <label for="zip" className="form-label">
            Zip
          </label>
        </div>
        </div>
        {/* --------------------------------------------------------------- DESCRIPTION */}
        <div className="col-md-12">
        <div class="form-floating">
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Description"
            required
          ></textarea>
          <label for="description">Briefly Describe Your Project</label>
        </div>
        </div>
        {/* --------------------------------------------------------------- PICTURES */}
        <div className="col-md-4">
          <label for="picture1" className="form-label">
            Picture 1
          </label>
          <input className="form-control" type="file" id="picture1" required/>
        </div>
        <div className="col-md-4">
          <label for="picture2" className="form-label">
            Picture 2
          </label>
          <input className="form-control" type="file" id="picture2" />
        </div>
        <div className="col-md-4">
          <label for="picture3" className="form-label">
            Picture 3
          </label>
          <input className="form-control" type="file" id="picture3" />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
