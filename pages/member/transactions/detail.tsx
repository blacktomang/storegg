import React from 'react'
import Sidebar from '../../../components/organism/Sidebar'
import TransactionDetailContent from '../../../components/organism/TransactionDetailContent'

function detail() {
    return (
        <section className="transactions-detail overflow-auto">
            <Sidebar activePath='/member/transactions' />
            <TransactionDetailContent />
        </section>
    )
}

export default detail
