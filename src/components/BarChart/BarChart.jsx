import './BarChart.scss'
import { useState } from "react"

function BarChart({ day, amount }) {
    const [viewAmount, setViewAmount] = useState(false)

    function onClick() {
        setViewAmount(previous => !previous)
    }

    return (
        <div className="bar-chart">
            {viewAmount && <p className="amount">${amount}</p>}
            <div
                className="bar"
                onClick={onClick}
                style={{
                    height: `${amount}px`
                }}
            ></div>
            <p className='day'>{day}</p>
        </div>
    )
}
export default BarChart