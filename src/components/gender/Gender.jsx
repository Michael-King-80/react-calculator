const Gender = () => {
  return (
    <div className="gender">
      <h1>gender</h1>
      <label class="container">
        Male
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Female
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default Gender;
