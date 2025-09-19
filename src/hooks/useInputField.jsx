import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, SetFieldValue] = useState(defaultValue);

    const handleFieldOnChange = e => {
        SetFieldValue(e.target.value);
    }

    return [fieldValue,handleFieldOnChange];

};

export default useInputField;