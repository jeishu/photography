import React from 'react';
import Footer from '../../components/footer';
import { useForm, ValidationError } from '@formspree/react';
import "./style.scss";

// uses formspree for the contact form

function ContactForm() {
    const [state, handleSubmit] = useForm("mjvjgnkw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address*
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message*
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

const Contact = () => {

    return (
        <div className="page">
            <div className="general-section contact-page">
                <div className="contact-box">
                    <h1>Let's Chat!</h1>
                    <p>Questions, concerns, booking, coffee, food, adventure? I'm always up for connecting with people.</p>
                    <ContactForm />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
