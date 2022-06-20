import Button from "./Button"

const TextInput = ( {Action, OnClick, ForLabel, LabelTitle, InputType, 
    InputID, InputName, Placeholder} ) => {
    return (
        <form action={Action} onClick={OnClick}>
            <label for={ForLabel}> {LabelTitle} </label>
            <input type={InputType} id={InputID} name={InputName} placeholder={Placeholder}></input>
            <Button ButtonClass="newsletter-button"/>
        </form>
    )
}

export default TextInput
