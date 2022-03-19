import React   from 'react'

const SesionContext=React.createContext()

function SesionProvider(props){
    let [idClass,setIdClass]=React.useState(0)
    let [urlContent,setUrlContent]=React.useState(null)

    return (
        <SesionContext.Provider value={
            {
                idClass,
            setIdClass,
            urlContent,
            setUrlContent
        }
        }>
            {props.children}
        </SesionContext.Provider>
    )

}

export {SesionContext,SesionProvider}
