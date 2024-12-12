import Link from 'next/link'
import { FC, Fragment, ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const MainLayout: FC<Props> = ({ children }: Props) => {
    return (
        <Fragment>
            <div className="flex gap-10 justify-center py-6">
                <Link href="/">
                    <button className="bg-gray-500 min-w-[100px] text-white w-fit mx-auto px-4 py-0.5 rounded-2xl hover:bg-gray-400 transition-colors">
                        Home
                    </button>
                </Link>
                <Link href="/department">
                    <button className="bg-gray-500 min-w-[100px] text-white w-fit mx-auto px-4 py-0.5 rounded-2xl hover:bg-gray-400 transition-colors">
                        Department
                    </button>
                </Link>
            </div>
            {children}
        </Fragment>
    )
}

export default MainLayout
