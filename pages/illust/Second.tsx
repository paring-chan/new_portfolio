import Second from '@assets/Illust/Photos/Second.png';
import Second_Video from '@assets/Illust/Videos/Second.mp4';
import Illust from "@components/Illust";

export default function Two() {
    return (
        <Illust img={Second} video={Second_Video} title='Whale' description='바다 위에 즐거워하는 고래를 그렸습니다.' />
    )
}