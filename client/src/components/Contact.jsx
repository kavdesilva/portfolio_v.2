const Contact = () => {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <div className="form-container">
                <div className="blurb">
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
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
                            placeholder="" 
                            required={true}/>
                        <label htmlFor="email-address"><p>Email address</p></label>
                        <input type="email" 
                            name="_replyto" 
                            id="email-address" 
                            placeholder=" " 
                            required={true}/>

                        <label htmlFor="message"><p>Message</p></label>
                        <textarea rows="15" 
                                    name="message" 
                                    id="message" 
                                    placeholder=" " 
                                    required={true}></textarea>
                    </fieldset>
                    <button type="submit" className="btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact