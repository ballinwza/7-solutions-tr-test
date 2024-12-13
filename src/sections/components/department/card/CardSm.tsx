import { FC, ReactNode } from 'react'
interface Props {
    children: ReactNode
    index: number
    bgColor: string
}
const CardSm: FC<Props> = ({ children, index, bgColor }: Props) => {
    return (
        <div
            className={`${bgColor} text-center py-1 ${index === 0 ? 'rounded-b-xl' : 'rounded-xl'}`}
        >
            {children}
        </div>
    )
}

export default CardSm
