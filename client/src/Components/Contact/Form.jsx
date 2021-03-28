const Form = ({ className, type, id, placeholder, htmlFor, label }) => {
  return (
    <div className={className}>
      <div className="form-floating">
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
        />
        <label htmlFor={htmlFor} className="form-label">{label}</label>
      </div>
    </div>
  );
};

export default Form;
