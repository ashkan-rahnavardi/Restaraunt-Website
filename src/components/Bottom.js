import ImageAndText from "./ImageAndText"

const Bottom = () => {
    return (
        <div className='Bottom'>
            <div className='Bottom-container'>
                <ImageAndText 
                    DivName='Bottom-left'
                    ImageName='kitchen'
                    ImageSource='/kitchen.jpeg'
                    Text1='Join our team'
                    Text2="We're always hiring"
                    Text3="Learn More"
                />
                <ImageAndText
                    DivName='Bottom-right'
                    ImageName='food'
                    ImageSource='/food.jpeg'
                    Text1='Sustainability'
                    Text2="commited to serving health"
                    Text3="Learn More"
                />
            </div>
        </div>
    )
}

 export default Bottom
