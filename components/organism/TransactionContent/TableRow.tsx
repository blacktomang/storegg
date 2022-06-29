import Link from 'next/link'
import React from 'react'
import { jsPriceFormat } from '../../../helpers/price'

interface TableProps {
  image: string
  title: string
  category: string
  item: number
  price: number
  status: string
}
function TableRow(props: TableProps) {
  const { category, image, item, price, status, title } = props;

  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width={80}
          height={60}
          alt={title}
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          Rp {jsPriceFormat(price)}
        </p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status.toLocaleUpperCase()}
          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions/detail`}>
          <a
            href="/member/transactions/detail"
            className="btn btn-status rounded-pill text-sm"
          >
            Details
          </a>
        </Link>
      </td>
    </tr>
  )
}

export default TableRow