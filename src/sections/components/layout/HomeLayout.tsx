import { FC, ReactNode } from 'react'
import { CustomHomeLayout } from './HomeLayout.style'

interface Props {
    children: ReactNode
}

const { Container } = CustomHomeLayout

const HomeLayout: FC<Props> = ({ children }: Props) => {
    return <Container>{children}</Container>
}

export default HomeLayout
