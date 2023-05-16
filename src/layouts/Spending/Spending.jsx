import './Spending.scss'
import data from '../../data.json'
import BarChart from '../../components/BarChart/BarChart'

function Spending() {
    const totalThisMonth = 478.33
    const percentageFromLastMonth = 2.4

    return (
        <article id="spending">
            <h1>Spending - Last 7 days</h1>
            <section id='week'>
                {data.map(item => {
                    const { day, amount } = item
                    
                    return <BarChart key={`${day}-key`} day={day} amount={amount} />
                })}
            </section>
            <div className="divider"></div>
            <section id="total-this-month">
                <div className="left">
                    <h2>Total this month</h2>
                    <h1>${totalThisMonth}</h1>
                </div>
                <div className="right">
                    <h1>{percentageFromLastMonth > 0 ?
                    `+${percentageFromLastMonth}` :
                    percentageFromLastMonth}%</h1>
                    <h2>from last month</h2>
                </div>
            </section>
        </article>
    )
}
export default Spending