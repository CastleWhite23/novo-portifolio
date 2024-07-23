import './PageComponent.css'


const PageComponent = ({ children }) => {
    return (
        <>
            <div className="page-component-children">
                {children}
            
            </div>
            
        </>
    )
}

export { PageComponent }
