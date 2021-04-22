import { useState } from "react";
import Form from "./Form";

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
    <section id={id} className="py-5">
      <form className="row g-3">
        <h1 className="text-center">Tell Us About Your Project</h1>
        {/* --------------------------------------------------------------- FIRST & LAST NAME */}
        <Form
          className="col-md-6"
          type="text"
          id="name"
          placeholder="First Name Last Name"
          htmlFor="name"
          label="First and Last Name"
        />
        {/* --------------------------------------------------------------- PHONE NUMBER */}
        <Form
          className="col-md-6"
          type="number"
          id="phone"
          placeholder="XXX-XXX-XXXX"
          htmlFor="phone"
          label="Phone Number"
        />
        {/* --------------------------------------------------------------- EMAIL ADDRESS */}
        <Form
          className="col-md-12"
          type="email"
          id="email"
          placeholder="name@example.com"
          htmlFor="email"
          label="Email Address"
        />
        {/* --------------------------------------------------------------- ADDRESS */}
        <Form
          className="col-md-12"
          type="text"
          id="address"
          placeholder="1234 Main St"
          htmlFor="address"
          label="Address"
        />
        {/* --------------------------------------------------------------- CITY */}
        <Form
          className="col-md-6"
          type="text"
          id="city"
          placeholder="City Name"
          htmlFor="city"
          label="City"
        />
        {/* --------------------------------------------------------------- STATE */}
        <Form
          className="col-md-4"
          type="text"
          id="state"
          placeholder="State Name"
          htmlFor="state"
          label="State"
        />
        {/* --------------------------------------------------------------- ZIP CODE */}
        <Form
          className="col-md-2"
          type="text"
          id="zip"
          placeholder="Zip Code"
          htmlFor="zip"
          label="Zip"
        />
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
            required
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
        {/* --------------------------------------------------------------- SUBMIT BUTTON */}
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
