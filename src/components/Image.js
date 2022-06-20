const Image = ( { ImageSource, ImageName} ) => {
    return (
        <img src={ImageSource} className={ImageName} alt="something"></img>
    )
}

export default Image
