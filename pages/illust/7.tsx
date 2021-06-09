import Seventh from '@assets/Illust/Photos/Seventh.png';
import Seventh_Video from '@assets/Illust/Videos/Seventh.mp4';
import Illust from "@components/Illust";

export default function Seven() {
    return (
        <div>
            <Illust img={Seventh} video={Seventh_Video} title='Forest' description='산속의 포근한 풍경을 그려봤습니다.' />
        </div>
    )
}