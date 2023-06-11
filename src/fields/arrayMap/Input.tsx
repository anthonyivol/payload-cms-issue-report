import React, { useCallback, useEffect, useState } from "react";

import { useForm, useField, useAllFormFields, reduceFieldsToValues, useFormFields } from "payload/components/forms";

const ArrayMapInput = (props) => {
  
  const { path, custom } = props;
  
  const fromField = custom.fromField
  const arrayField = custom.arrayField
  
  const [rows, setRows] = useState("[]");
  
  const { showError, value, setValue } = useField({ path });
  
  const { replaceState } = useForm();
  
  const textField = useFormFields(([fields, dispatch]) => fields[fromField]);
  const [ fields, dispatchFields ] = useAllFormFields()

  const jsontextField = JSON.stringify(textField)

  useEffect(() => {
    
    if( textField?.value !== "" && textField?.value !== undefined ){    
      const rowsFromField = String(textField.value).split('')
      setRows(JSON.stringify(rowsFromField))
    }
  }, [jsontextField])

  useEffect(() => {
       
       const rowsFromField = JSON.parse(rows)
       console.log('########################################')
       console.log(rowsFromField)
       console.log(fields)

       const newState = { ...fields, [arrayField] : {
           ...fields[arrayField],
           initialValue: rowsFromField.length,
           value: rowsFromField.length,
           valid: true,
           rows: rowsFromField.map(( row, i) => ({
              initialValue: row,
              value: row,
              valid: true,
            })),

           disableFormData: true,
       }};
       
       // console.log(rowsFromField.length)
       
       // Create an array for every variation
       // and loop over it
       rowsFromField.forEach(( row, i) => {
         // Assign the listAmounts array field itself a value
         // equal to an integer of how many rowsFromField it should have
         newState[`${arrayField}.${i}.name`] = {
           initialValue: row,
           value: row,
           valid: true,
         };
 
       });
 
       console.log(newState)
       console.log("REPLACE STATE")

       replaceState(newState);
       
  }, [rows])

  return <></>

};

export default ArrayMapInput;
