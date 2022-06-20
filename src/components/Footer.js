import AddressBox from "./AddressBox"
import Links from "./Links"
import Newsletter from "./Newsletter"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <AddressBox/>
                <Links/>
                <Newsletter/>
            </div>
        </div>
    )
}

export default Footer
