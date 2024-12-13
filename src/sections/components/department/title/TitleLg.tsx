import { FC, ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const TitleLg: FC<Props> = ({ children }: Props) => {
    return (
        <div className="bg-gray-500 text-white text-center rounded-t-xl font-bold py-0.5">
            {children}
        </div>
    )
}

export default TitleLg
