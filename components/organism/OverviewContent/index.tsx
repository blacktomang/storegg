import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Category icon='ctn-desktop' type='Desktop' spend={10000000} />
              <Category icon='ctn-mobile' type='Mobile' spend={8000000} />
              <Category icon='ctn-others' type='Others' spend={9000000} />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow title='Mobile Legends: The New Battle 2021' item={100} category='Desktop' price={100000} status={'pending'} image='/img/overview-1.png' />
                <TableRow title='Call of Duty:Modern' item={100} category='Desktop' price={100000} status={'success'} image='/img/overview-2.png' />
                <TableRow title='Clash of Clans' item={100} category='Mobile' price={100000} status={'failed'} image='/img/overview-3.png' />
                <TableRow title='The Royal Game' item={100} category='Desktop' price={100000} status={'pending'} image='/img/overview-4.png' />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OverviewContent