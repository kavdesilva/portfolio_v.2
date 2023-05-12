const Contact = () => {
    return (
        <div id="contact">
            <h2>Contact</h2>
            <div className="divider"></div>
            <div className="form-container">
                <div className="blurb">
                    <p>Feel free to contact me by submitting the form below and I will get back to you as soon as possible.</p>
                </div>
                <form id="contact-form" 
                    name="simple-contact-form" 
                    action="https://formspree.io/f/xyyvevzw" 
                    method="post">
                    <fieldset>
                        <label htmlFor="full-name"><p>Name</p></label>
                        <input type="text" 
                            name="name" 
                            id="full-name"
                            placeholder="Enter Your Name" 
                            required={true}/>
                        <label htmlFor="email-address"><p>Email address</p></label>
                        <input type="email" 
                            name="_replyto" 
                            id="email-address" 
                            placeholder="Enter Your Email" 
                            required={true}/>

                        <label htmlFor="message"><p>Message</p></label>
                        <textarea rows="15" 
                                    name="message" 
                                    id="message" 
                                    placeholder="Type Message Here" 
                                    required={true}></textarea>
                    </fieldset>
                    <button type="submit" className="btn-primary submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact