import { useMemo } from 'react'
import { menuItems } from './constants'
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate()

    const items = useMemo(() => {
        return menuItems.map((m, i) => {
            return <div
                onClick={()=>navigate(m.url)}
                className="menu_item" key={'menu_item_' + i}>{m.label}</div>
        })
    },[])

    return <div className="menu">
        {items}
        </div> 
}
    
