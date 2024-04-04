import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { TouchRipple } from "../components/TouchRipple";

import "./Home.css";

export function HomePage(p: {path: string}) {
    return (
        <div className="home_page">
            <Icon name="title-logo" width={99} height={30} />
            <div style={{
                display: "flex",
                gap: "5px",
            }}>
                <Button.Category text="맞춤 콘텐츠" selected={true} />
                <Button.Category text="인기 콘텐츠" selected={false} />
                <Button.Category text="새로운 콘텐츠" selected={false} />
                <Button.Category text="오래된 콘텐츠" selected={false} />
            </div>
            <Body />
        </div>
    )
}

function Body() {
    return (
        <div className="body">
            <div className="spliter">
                <h3>인기 서버</h3>
                <p>최근 사용자들이 좋아하는 서버입니다.</p>
            </div>
            <BodyHeader />
        </div>
    )
}

function BodyHeader() {
    return (
        <div className="header">
            <img style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
            }} src="https://pbs.twimg.com/media/F_PsGxbWwAAShLD?format=jpg&name=4096x4096" />
            <div>
                <p className="title">네이티브 모험가 서버</p>
                <p className="description">기존 바닐라 마인크래프트에서 모험가 시스템을 추가하고 다양한 사람들과 함께 소통하고 플레이하세요.</p>
            </div>
        </div>
    )
}