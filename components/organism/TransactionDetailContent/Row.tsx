import React from 'react'

interface RowType {
  label: string
  value: string
  additionalClass?: string
}
function Row(props: RowType) {
  const { label, value, additionalClass } = props;
  return (
    <>
      <p className={"text-lg color-palette-1 mb-20"}>
        {label}
        <span className={`purchase-details ${additionalClass}`}>
          {value}
        </span>
      </p>
    </>
  )
}

export default Row