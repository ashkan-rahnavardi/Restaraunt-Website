import TextInput from "./TextInput"

const Newsletter = () => {
    return (
        <div className="newsletter">
            <TextInput 
                ForLabel="newsletteremail"
                LabelTitle="Newsletter"
                InputType="text"
                InputID="newsletteremail"
                InputName="newsletter"
                Placeholder="Enter your email"
            />
        </div>
    )
}

export default Newsletter
