interface ContainerProps {
    children: React.ReactNode
    classStyle?: string
}
export function Container({ children, classStyle }: Readonly<ContainerProps>) {
    return (
        <div className={`w-11/12 max-w-7xl mx-auto ${classStyle ?? ''}`}>
            {children}
        </div>
    )
}