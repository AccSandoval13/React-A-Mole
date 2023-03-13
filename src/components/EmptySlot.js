import { useEffect } from "react"
import MoleHill from './molehill.jpeg' 
const EmptySlot = (props) => {

    // This useEffect will run when the component is mounted
    // and create a timer that will toggle the state of theMole 
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot