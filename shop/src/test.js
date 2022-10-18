import { useDeferredValue, useTransition, useState} from 'react'

let a = new Array(10000).fill(0)

function Test(){
    let [name, setName] = useState('')
    let [isPending, startTransition] = useTransition()
    // let state1 = useDeferredValue(name)
    
    return (
        <div>
            <input onChange={ (e)=>{
                startTransition(()=>{
                    setName(e.target.value)
                })
                // setName(e.target.value)
            }}/>

            {
                isPending ? "로딩중" : 
                a.map(()=>{
                    return <div>{name}</div>
                    // return <div>{state1}</div>
                })
            }
        </div>
  )
}


export default Test