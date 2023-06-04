import {useState, useRef} from 'react'
import Card from './Card';

function Cards(){
    
    const cardRefs = useRef([])

    const [items, setItems] = useState([
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''},
        {id: 1, stat: ''}
    ]
    )

    const setCardRef = (ref, index) =>{
        cardRefs.current[index] = ref
    }

    return <div className='squaresContainer'>
                {items.map ( (item, index) =>(
                    <Card></Card>))
                }
            </div>  
}

export default Cards;