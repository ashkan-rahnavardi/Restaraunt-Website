import Image from "./Image"

const ImageAndText = ( {DivName, ImageName, ImageSource, Text1, Text2, Text3, Text1Name, Text2Name, Text3Name} ) => {
    return (
        <div className={DivName}>
            <Image ImageSource={ImageSource} ImageName={ImageName} />
            <h1 className={Text1Name}> {Text1} </h1>
            <h1 className={Text2Name}> {Text2} </h1>
            <h1 className={Text3Name}> {Text3} </h1>
        </div>
    )
}

export default ImageAndText
