import {useState} from 'react';
type imgInfo = {
    src: string,
    alt: string,
    size: string
}

type state = {
    isClicked: boolean,
    count: number
}
const Icon = ({src,alt,size}: imgInfo) => {
    const [state, setState] = useState<state>({
        isClicked: false,
        count: 0
    })

    return (
        <img src={src} alt={alt} className={size} />
    )
}

export default Icon;
