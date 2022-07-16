import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './App.css';
  

const App = () => {
  
	const form = useRef();


	const clearForm = () => { 
	  document.getElementById("contact-form").reset();
	}
    
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_6i29szq","template_m3k3zcs",form.current, "9iFDDNtIHjFaQettO")
		  .then(
			(result) => {
			  console.log(result.text);
			  alert("SUCCESS!");
			  clearForm();
			},
			(error) => {
			  console.log(error.text);
			  alert("FAILED...", error);
			}
		  );
	  };

	
  return (
    <div className="App">
      <div className="container">
      <div className="p-4 mx-auto w-75">
	  <h1 className="text-center mb-5"><span style={{color: "#cc8dff"}}>Contact</span> Us</h1>
        <form id="contact-form" onSubmit={sendEmail} ref={form}>
          <div className="row mb-4">
            <div className="col">
              <label for="name" className="form-label">Name</label>
              <input
                className="form-control px-4 py-2"
                type="text"
                id="name"
				name="name"
				placeholder="James Adi"
                required
              />
            </div>
            <div className="col">
              <label for="email" className="form-label">Email</label>
              <input className="form-control px-4 py-2" type="email" id="email" name="email" placeholder="jamesadam@gmail.com" required/>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label for="phone" className="form-label">Phone</label>
              <input className="form-control px-4 py-2" type="tel" id="phone" name="phone" placeholder="+1567834563222" required/>
            </div>
            <div className="col">
              <label for="subject" className="form-label">Subject</label>
              <input className="form-control px-4 py-2" type="text" id="subject" name="subject" placeholder="Welcome" required/>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label for="message" className="form-label">Message</label>
              <textarea
				name="message"
                className="form-control p-4"
                rows="6"
                id="message"
				placeholder="Hey awesome! hope you are doing great! well..."
                required
              ></textarea>
              <div id="message-help" className="form-text">Max. 500 characters</div>
            </div>
          </div>
          <div className="d-flex ">
            <button type="submit" style={{backgroundColor: "#cc8dff"}} className="btn text-white py-2 px-4">Send Message</button>
			<p><a href="#" className="px-4 d-flex align-middle text-dark" onClick={clearForm}>Reset Form</a></p>
          </div>
		  <p><a href="#" className="d-flex justify-content-end text-muted">Need Help?</a></p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
