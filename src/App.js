import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Isabelle");
  const [address, setAddress] = useState("edin st");
  const [phone, setPhone] = useState("0990532059");
  const [email, setEmail] = useState("io@live.it");
  const [complaint, setComplaint] = useState("");

  //TODO: Add your state fields here

  // const [phoneBox, setPhoneBox] = useState("");
  // const [emailBox, setEmailBox] = useState("");
  // This will handle the changing 'name/input' and bc of how it's logged, it'll log as an object.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, address, phone, email, complaint }); // Name etc, is a string and here we're logging an object with name as property.
  };

  // This will handle our input having a console.log for each press on the keyboard
  const handleChangeName = (name) => {
    console.log(name.target.value);
    setName(name.target.value);
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

  const handleComplaint = (compl) => {
    setComplaint(compl.target.value);
  };
  // const handlePhoneBox = (phoneBox) => {
  //   console.log(phoneBox.target.value);
  //   setPhoneBox(phoneBox.target.value);
  // };

  // const handleEmailBox = (emailBox) => {
  //   console.log(emailBox.target.value);
  //   setEmailBox(emailBox.target.value);
  // };

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
              onChange={handleComplaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                // onChange={handlePhoneBox}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                // onChange={handleEmailBox}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                // onChange={handlePostBox}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                // onChange={handleNoContBox}
              />
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
