import { useState } from "react"

export default function useCustomState(value="default"){
    const [state,setState]=useState({
        value:value,
        isValid:false,
        isInvalid:false,
        errorMessage:"",
        successMessage:"",
    })
return[state,setState]
}