import React from 'react'

export default function PostLoading(Component) {
    return function PostLoadingComp({isLoading, ...props}) {
        if (!isLoading) return <Component { ...props}/>
        return (
            <p style={{fontSize: '25px'}}>
                Data is loading...
            </p>
        )
    }
}
