import { Title } from "../../styles/sharedStyles";

const builder = {
    "DEFAULT": (title) => {
        return(
            <Title>
                title
            </Title>
        )
    },
}

export const mainTitle = (title) =>{
    return builder['DEFAULT'](title)
}

export default mainTitle