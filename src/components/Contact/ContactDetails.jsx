

const ContactDetails = () => {
  return (
    <div className="contactDetails">
        <div className="contactDetails__content">
            <p className="contactDetails__content__headText">Info</p>
            <p className="contactDetails__content__text"><a className="contactDetails__content__text__link" href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></p>
            <p className="contactDetails__content__text">Contact Us at: <br /><a className="contactDetails__content__text__link" href="mailto:Info@dummymail.com ">Info@dummymail.com</a></p>
            <p className="contactDetails__content__text">Cuisine is open for dinner service weekly, Thursday to Sunday <br />
                Reservations available on <a className="contactDetails__content__text__link" href="#">SevenRooms</a>
            </p>
            <p className="contactDetails__content__headText">Press</p>
            <p className="contactDetails__content__text">For press and media inquiries click <a className="contactDetails__content__text__link" href="mailto:Info@dummymail.com">here</a>
            </p>
            <p className="contactDetails__content__headText">Career</p>
            <p className="contactDetails__content__text">We are always looking for highly motivated and driven people.
                To learn more, click  <a className="contactDetails__content__text__link" href="mailto:Info@dummymail.com">here</a>
            </p>
            <p className="contactDetails__content__headText">NewsLetter</p>
            <p className="contactDetails__content__text">If you like to keep up to date with events and news from the restaurant please sign up to be the first to know the latest news. Click <a className="contactDetails__content__text__link" href="mailto:Info@dummymail.com">here</a> to sign up.
            </p>
        </div>
    </div>
  )
}

export default ContactDetails