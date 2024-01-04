import "../App.scss";

export default function Contact() {
  return (
    <div className="contact-body">
      <h2>GET IN TOUCH NOW</h2>
      <p>Send us a message, we'd love to hear from you</p>
      <form
        name="DISD-Contact-Form"
        method="post"
        data-netlify="true"
        className="form"
        onSubmit={() => "submit"}
      >
        <input type="hidden" name="form-name" value="DISD-Contact-Form" />
        <p className="form-section">
          <input type="text" name="name" placeholder="Name *" required />
        </p>

        <p className="form-section">
          <input
            id="email-box"
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
        </p>

        <p className="form-section">
          <input
            id="subject-box"
            type="text"
            name="subject"
            placeholder="Subject *"
            required
          />
        </p>

        <p className="form-section">
          <textarea
            type="text"
            id="msg-box"
            name="message"
            placeholder="Message *"
            required
          ></textarea>
        </p>

        <p>
          <button className="form-button" type="submit">
            SUBMIT
          </button>
        </p>
      </form>
    </div>
  );
}
