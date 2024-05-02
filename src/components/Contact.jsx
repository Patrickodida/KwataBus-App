import React from "react";
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <h2 className="text-4xl text-center my-6">Contact Us</h2>
        <div>
          <h3>Get In Touch</h3>
          <p>
            Havea question, feedback or need assistance? We're here to help! Get
            in touch with us using the contact information below, and our
            dedicated team will get back to you as soon as possible.{" "}
          </p>
        </div>

        <div>
          <h3>Contact Information: Customer Support</h3>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:support@kwatabus.com" target="_blank">support@kwatabus.com</Link>
            </li>
            <li>
              <strong>Phone:</strong> +256 123 456788
            </li>
            <li>
              <strong>Hours:</strong> Our customer support team is available
              24/7 to assist you with any inquiries or concerns.
            </li>
          </ul>
        </div>

        <div>
          <h3>Business Inquiries</h3>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:business@kwatabus.com">business@kwatabus.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +256 123 456789
            </li>
            <li>
              <strong>Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM (EAT)
            </li>
          </ul>
        </div>

        <div>
          <h3>Connect With Us</h3>
          <p>
            Stay updated on the latest news, promotions, and travel tips by
            following us on social media:
          </p>
          <ul>
            <li>
              <strong>Facebook:</strong>{" "}
              <Link href="https://facebook.com/kwatabus"
                target="_blank"
                rel="noopener noreferrer">facebook.com/kwatabus</Link>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <Link href="https://twitter.com/kwatabus"
                target="_blank"
                rel="noopener noreferrer">twitter.com/kwatabus</Link>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <Link href="https://instagram.com/kwatabus"
                target="_blank"
                rel="noopener noreferrer">instagram.com/kwatabus</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Visit Us:</h3>
          <p>
            If you prefer face-to-face interactions, you can also visit our
            office:
          </p>
          <address>
            KwataBus Headquarters <br />
            123 Traveler's Avenue <br />
            City Center, Metroville <br />
            Uganda
          </address>
        </div>

        <div>
          <p>
            Our friendly staff will be happy to assist you with any inquiries in
            person.
          </p>
          <p>
            Thank you for choosing KwataBus for your travel needs. We look
            forward to hearing from you!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
