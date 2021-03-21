import { useState } from "react";

const Contact = ({ id }) => {
  // Currently Picked File
  const [selectedFile, setSelectedFile] = useState({
    picture1: {},
    picture2: {},
    picture3: {},
  });
  // Determines if a file has been picked
  const [isFilePicked, setIsFilePicked] = useState({
    picture1: false,
    picture2: false,
    picture3: false,
  });

  // Handles User choosing a file
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.id == "picture1") {
      setSelectedFile({ ...selectedFile, picture1: e.target.files[0] });
      setIsFilePicked({ ...isFilePicked, picture1: true });
    } else if (e.target.id == "picture2") {
      setSelectedFile({ ...selectedFile, picture2: e.target.files[0] });
      setIsFilePicked({ ...isFilePicked, picture2: true });
    } else if (e.target.id == "picture3") {
      setSelectedFile({ ...selectedFile, picture3: e.target.files[0] });
      setIsFilePicked({ ...isFilePicked, picture3: true });
    }
  };

  const onFileUpload = () => {
    console.log("onFileUpload");
  };

  return (
    <section id={id} className="my-5">
      <form className="row g-3">
        <h1 className="text-center">Tell Us About Your Project</h1>
        {/* --------------------------------------------------------------- FIRST & LAST NAME */}
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="First Name Last Name"
              required
            />
            <label htmlFor="name">First and Last Name</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- PHONE NUMBER */}
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="XXX-XXX-XXXX"
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- EMAIL ADDRESS */}
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- ADDRESS */}
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
            <label htmlFor="address" className="form-label">
              Address
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- CITY */}
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City Name"
            />
            <label htmlFor="city" className="form-label">
              City
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- STATE */}
        <div className="col-md-4">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State Name"
            />
            <label htmlFor="state" className="form-label">
              State
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- ZIP CODE */}
        <div className="col-md-2">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip Code"
              required
            />
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
          </div>
        </div>
        {/* --------------------------------------------------------------- DESCRIPTION */}
        <div className="col-md-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Description"
              required
            ></textarea>
            <label htmlFor="description">Briefly Describe Your Project</label>
          </div>
        </div>
        {/* --------------------------------------------------------------- PICTURES */}
        <div className="col-md-4 text-center">
          <input
            className="form-control"
            type="file"
            id="picture1"
            onChange={onFileChange}
          />
          <label htmlFor="picture1" className="form-label">
            {isFilePicked.picture1
              ? selectedFile.picture1.name
              : "Choose Picture 1"}
          </label>
        </div>
        <div className="col-md-4 text-center">
          <input
            className="form-control"
            type="file"
            id="picture2"
            onChange={onFileChange}
          />
          <label htmlFor="picture2" className="form-label">
            {isFilePicked.picture2
              ? selectedFile.picture2.name
              : "Choose Picture 2"}
          </label>
        </div>
        <div className="col-md-4 text-center">
          <input
            className="form-control"
            type="file"
            id="picture3"
            onChange={onFileChange}
          />
          <label htmlFor="picture3" className="form-label">
            {isFilePicked.picture3
              ? selectedFile.picture3.name
              : "Choose Picture 3"}
          </label>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn-lg greenWhite"
            onClick={onFileUpload}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
