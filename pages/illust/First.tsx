import First from '@assets/Illust/Photos/First.png';
import First_Video from '@assets/Illust/Videos/First.mp4';
import Illust from "@components/Illust";

export default function One() {
    return (
        <Illust img={First} video={First_Video} title='Space ball' description='우주의 풍경을 구슬로 그려봤습니다.' />
    )
}