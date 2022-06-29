import React from 'react'
import cx from 'classnames';

interface ButtonTabProps {
  active: boolean
  title: string
}
function ButtonTab(props: ButtonTabProps) {
  const { active, title } = props;

  const clasName = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active
  })
  return (
    <a
      data-filter="*"
      href="#"
      className={clasName}
    >
      {title}
    </a>
  )
}

export default ButtonTab