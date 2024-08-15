// This is an example component that we will be using only for the purpose of debugging!

import {useParams} from "react-router-dom";

function ExampleComponent(){

    console.log(useParams())
    
    // const {num1, num2} = useParams()
    // console.log(id)
    // console.log(num1)
    // console.log(num2)
    // console.log(typeof num1)
    // console.log(typeof num2)
    // console.log(parseInt(num1))
    // console.log(parseInt(num2))

    // if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
    //     return <h1>Error: Both parameters must be numbers!</h1>
    // }

    // return <h1>{num1} + {num2} = {parseInt(num1) + parseInt(num2)}</h1>
    return <h1>This is an example component!</h1>
}

export default ExampleComponent;