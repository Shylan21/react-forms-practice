import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [name, setName] = useState("");
  const [address, setAddress] = useState("edin st");
  const [phone, setPhone] = useState("0990532059");
  const [email, setEmail] = useState("io@live.it");
  const [complaint, setComplaint] = useState("");
  const [contact, setContact] = useState("email");
  const [consent, setConsent] = useState(true);

  const handleSubmit = (event) => {
    // This will handle the changing 'name/input' and bc of how it's logged, it'll log as an object.
    event.preventDefault();
    console.log({ name, address, phone, email, complaint, contact, consent }); // Name etc, is a string and here we're logging an object with name as property.
  };

  // This will handle our input having a console.log for each press on the keyboard
  const handleChangeName = (name) => {
    console.log("Name", name.target.value);
    setName(name.target.value);
  };

  const handleChangeAddress = (add) => {
    console.log("Address", add.target.value);
    setAddress(add.target.value);
  };

  const handleChangePhoneNum = (num) => {
    console.log("Number", num.target.value);
    setPhone(num.target.value);
  };

  const handleChangeEmail = (em) => {
    console.log("Email", em.target.value);
    setEmail(em.target.value);
  };

  const handleComplaint = (compl) => {
    console.log("Complaint", compl.target.value);
    setComplaint(compl.target.value);
  };

  const handleChangeContact = (contact) => {
    console.log("Contact", contact.target.value);
    setContact(contact.target.value);
  };

  const handleChangeConsent = (consent) => {
    console.log("Consent", consent.target.checked);
    setConsent(consent.target.checked);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name {name === "Isabelle" && <span>🤟🏻🖤</span>}
            <input
              type="text"
              name="name"
              required
              onChange={handleChangeName} // The job of this is making sure it takes care of the [name, setName]
              value={name} // This will have as a value at every load, the name we have in useState.
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChangeAddress}
              value={address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleChangePhoneNum}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChangeEmail}
              value={email}
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
              onChange={handleComplaint} // On extra lines we'll get in the log / for each space. If we log that with backticks, it'll come back with it's own structure
              // value={complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChangeContact}
                checked={contact === "phone"} //The value can also be true or false to show on the load of the page if it's selected or not
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChangeContact}
                checked={contact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChangeContact}
                checked={contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChangeContact}
                checked={contact === "none"}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleChangeConsent}
              checked={consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
