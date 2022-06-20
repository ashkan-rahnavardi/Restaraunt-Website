import Button from "./Button"

const TextAndButton = ( {DivName, Text1, Text2, Text3, Text1Name, 
    Text2Name, Text3Name, ButtonText, ButtonClass} ) => {
    return (
        <div className={DivName}>
            <h1 className={Text1Name}> {Text1} </h1>
            <h1 className={Text2Name}> {Text2} </h1>
            <h1 className={Text3Name}> {Text3} </h1>
            <Button ButtonClass={ButtonClass} ButtonText={ButtonText} />
        </div> 
    )
}

export default TextAndButton
