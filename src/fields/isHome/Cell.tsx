import React from 'react'
import { Props } from 'payload/components/views/Cell';

const Cell: React.FC<Props> = (props) => {
  const { field, colIndex, collection, cellData, rowData } = props;
  
  // console.log(props)

  if (!cellData) return null;

  return (
    <div>{cellData ? '★' : ''}</div>
  )
}

export default Cell