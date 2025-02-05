import React, { useState } from "react";

const ComplaintCorner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && email && mobile && subject && message) {
      alert(`Message Sent: \nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`);
      // Reset form fields after submission
      setName("");
      setEmail("");
      setMobile("");
      setSubject("");
      setMessage("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="p-4 bg-yellow-100 rounded-lg mt-8 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Complain / Suggestion</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name*"
          className="p-2 border rounded-md w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email*"
          className="p-2 border rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Mobile*"
          className="p-2 border rounded-md w-full"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject*"
          className="p-2 border rounded-md w-full"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="p-2 w-full border rounded-md"
          placeholder="Message*"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-main-color text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default ComplaintCorner;
