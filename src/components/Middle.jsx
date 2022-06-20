import TextAndButton from "./TextAndButton"

// const Middle = () => {
//     return (
//         <div className='Middle'>
//             <TextAndButton
//                 DivName='Middle-container'
//                 Text1='Resaurant name'
//                 Text2='A casuale restaurant specializing in food'
//                 ButtonText='View Menu'
//             />
//         </div>
//     )
// }

const Middle = () => {
    return (
        <div className="Middle">
            <div className="Middle-container">
                <h1>Restaurant name</h1>
                <h1>A casuale restaurant specializing in food</h1>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Middle
