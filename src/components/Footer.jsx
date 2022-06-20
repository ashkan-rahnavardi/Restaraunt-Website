const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="address">
                    <h3>Address</h3>
                    <a href="#top">170 Thompson Street New York City, NY 10012</a>
                    <h5>212 982 5089</h5>
                </div>
                <div className="links">
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                </div>
                <div className="newsletter">
                    <form>
                        <label for="newsletteremail">Newsletter</label>
                        <input type="text" id="newsletteremail" name="newsletter" placeholder="Enter your email"></input>
                        <button className="newsletter-button">send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Footer
