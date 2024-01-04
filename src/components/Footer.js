import "../App.scss";

export default function Footer() {
  return (
    <div className="footer-body">
      <ul>
        <li>
          <p>Contact us:</p>
        </li>
        <li>
          <a
            href="mailto:daniel.feddy0123@gmail.com"
            aria-label="Email Link to daniel.feddy0123@gmail.com"
          >
            <p>daniel.feddy0123@gmail.com</p>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <p>Follow us:</p>
        </li>
        <li>
          <ul className="socials">
            <li>
              <a
                href="https://danielfeddy.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-x-twitter"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://danielfeddy.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-github"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-feddy-490612262/"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-linkedin-in"></i>
                </p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <p>DI Software Development Limited</p>
        </li>
        <li>
          <a
            href="../Privacy Policy _ Queen Pin.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <p>Privacy Policy</p>
          </a>
        </li>
        <li>
          <p>All Rights Reserved</p>
        </li>
      </ul>
      <a href="https://danielfeddy.com" target="_blank" rel="noreferrer">
        <p>Website by Daniel Feddy</p>
      </a>
    </div>
  );
}
