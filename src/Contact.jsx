import React, { useState } from "react";

const Contact = () => {

  const [data, setdata] = useState({
    fname : '',
    phone : '',
    email : '',
    msg : ''
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setdata((prevval) => {
      return  {
        ...prevval,
        [name] : value,
      }
    })
  }
  
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fname}. My Mobile no is ${data.phone} and email is ${data.email}, Here is What i want to say ${data.msg}`
    );
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={inputEvent} placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobilr Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;