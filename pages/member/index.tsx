import React from 'react'
import MemberContent from '../../components/organism/OverviewContent'
import Sidebar from '../../components/organism/Sidebar'

function Member() {
    return (
        <section className="overview overflow-auto">
            <Sidebar />
            <MemberContent />
        </section>

    )
}

export default Member
