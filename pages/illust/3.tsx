import Third from '@assets/Illust/Photos/Third.png';
import Third_Video from '@assets/Illust/Videos/Third.mp4';
import Illust from "@components/Illust";

export default function Three() {
    return (
        <Illust img={Third} video={Third_Video} title='Snow ball' description='겨울의 풍경을 구슬로 그려봤습니다.' />
    )
}