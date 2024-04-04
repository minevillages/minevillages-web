import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { TouchRipple } from "../components/TouchRipple";

import "./Home.css";

class Server { // data-class
    constructor(
        public title: string,
        public description: string,
        public coverURL: string,
    ) {}
}

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
            <BodyHeader />
            <div>
                <div className="split">
                    <h3>인기 서버</h3>
                    <p>최근 들어 사용자들이 주로 좋아하는 서버 목록입니다.</p>
                </div>
                <ServerList servers={[
                    new Server("네이티브 모험가 서버", "Description", "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Trails-and-Tales_1280x768.jpg"),
                    new Server("네이티브 모험가 서버", "Description", "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Media-Block-Image_PC-Bundle-Keyart_800x450.jpg"),
                ]} />
            </div>
            <div>
                <div className="split">
                    <h3>현재 가입된 서버</h3>
                    <p>현재 당신이 가입한 서버 목록입니다.</p>
                </div>
                <ServerList servers={[
                    new Server("대충 서버 제목", "대충 서버 설명입니다.", "https://i.ytimg.com/vi/oh2pvWTSJp0/maxresdefault.jpg")
                ]} />
            </div>
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

function ServerList({servers}: {servers: Server[]}) {
    return (
        <div className="server-list">
            {servers.map(server => {
                return <ServerItem data={server} />
            })}
        </div>
    )
}

function ServerItem({data}: {data: Server}) {
    return (
        <TouchRipple onTap={() => {}}>
            <div className="item">
                <img src={data.coverURL} />
                <div className="inner">
                    <h3>{data.title}</h3>
                    <p className="description">{data.description}</p>
                </div>
            </div>
        </TouchRipple>
    )
}