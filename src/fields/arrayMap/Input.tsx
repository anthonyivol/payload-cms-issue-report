import React, { useEffect, useState } from "react";

import { useForm, useField, useAllFormFields, useFormFields } from "payload/components/forms";

const ArrayMapInput = (props) => {
  
  const { path, custom } = props;
  
  const fromField = custom.fromField
  const toField = custom.toField
  
  const [rows, setRows] = useState("[]");
  
  const { showError, value, setValue } = useField({ path });
  
  const { replaceState } = useForm();
  
  const textField = useFormFields(([fields, dispatch]) => fields[fromField]);
  const [ fields, dispatchFields ] = useAllFormFields()

  const jsontextField = JSON.stringify(textField)

  useEffect(() => {
    
    if( textField?.value !== undefined ){    
      const rowsFromField = String(textField.value).split('')
      setRows(JSON.stringify(rowsFromField))
    }
  }, [jsontextField])

  useEffect(() => {
       
      const rowsFromField = JSON.parse(rows)
      
      const newState = { ...fields, [toField] : {
        ...fields[toField],
        value: rowsFromField.length,
      }};
      
      console.log("REPLACE STATE")
      replaceState(newState);
       
  }, [textField])

  return <></>

};

export default ArrayMapInput;
