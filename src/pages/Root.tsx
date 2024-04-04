import { VNode } from "preact"

import "./Root.css"

/** 해당 페이지는 항상 최상위 트리에 위치해야 합니다. */
export function RootPage({children}: {
    children: VNode
}) {
    return (
        <div className="root_page">
            <SideBar />
            <div>{children}</div>
        </div>
    )
}

function SideBar() {
    return <div className="side_bar">sfsdfs</div>
}