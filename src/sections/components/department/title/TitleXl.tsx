import { FC, ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const TitleXl: FC<Props> = ({ children }: Props) => {
    return (
        <div className="bg-gray-500 px-4 py-2 text-white font-bold">
            {children}
        </div>
    )
}

export default TitleXl
