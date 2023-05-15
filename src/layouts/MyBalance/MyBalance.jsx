import './MyBalance.scss'
import logo from "../../assets/images/logo.svg";
function MyBalance() {
    const myBalance = 921.48
    
    return (
        <section id="my-balance">
            <div className="details">
                <h2>My balance</h2>
                <h1>${`${myBalance}`}</h1>
            </div>
            <img src={logo} alt="Balance logo" />
        </section>
    )
}
export default MyBalance