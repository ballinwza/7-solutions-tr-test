import { FC, ReactNode } from 'react'
import { CustomVegetableLayout } from './Layout.style'

interface Props {
    children: ReactNode
}

const { Container } = CustomVegetableLayout

const VegetableLayout: FC<Props> = ({ children }: Props) => {
    return <Container>{children}</Container>
}

export default VegetableLayout
