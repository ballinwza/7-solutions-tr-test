import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const VegetableLayout: FC<Props> = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-10 px-8 pb-8 sm:grid-cols-3">
            {children}
        </div>
    )
}

export default VegetableLayout
