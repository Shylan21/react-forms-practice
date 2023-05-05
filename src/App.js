import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Isabelle");
  const [address, setAddress] = useState("edin st");
  const [phone, setPhone] = useState("0990532059");
  const [email, setEmail] = useState("io@live.it");
  //TODO: Add your state fields here

  // This will handle the changing 'name/input' and bc of how it's logged, it'll log as an object.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, phone, email }); // Name is a string and here we're logging an object with name as property.
  };

  // This will handle our input having a console.log for each press on the keyboard
  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangeAddress = (add) => {
    console.log(add.target.value);
    setAddress(add.target.value);
  };

  const handleChangePhoneNum = (num) => {
    console.log(num.target.value);
    setPhone(num.target.value);
  };

  const handleChangeEmail = (em) => {
    console.log(em.target.value);
    setEmail(em.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChangeName} // The job of this is making sure it takes care of the [name, setName]
              // value={name} // This will have as a value at every load, the name we have in useState.
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChangeAddress}
              // value={address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleChangePhoneNum}
              // value={phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChangeEmail}
              // value={email}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
