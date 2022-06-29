import Image from 'next/image';
import React from 'react'
import { jsPriceFormat } from '../../../helpers/price';

interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: string;
  image:string
}
function TableRow(props: TableRowProps) {
  const { category,item, price, status, title, image} = props;
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <Image src={image} alt={title} height={60} width={80} className='float-start me-3 mb-lg-0 mb-3'/>
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">{ title}</p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">Rp {jsPriceFormat(price)}</p>
        </td>
        <td>
          <div>
            <span className={`float-start icon-status ${status}`}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status.toLocaleUpperCase()}</p>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableRow