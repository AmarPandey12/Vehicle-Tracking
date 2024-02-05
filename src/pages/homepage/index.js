import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats"
import Vehicle from "../../components/Vehicle"

function home(){
    return (
        <div class="dashboard-main-wrapper">
            <Header/>
            <Navbar/>
            <Stats/>
            <Vehicle/>
        </div>
    )
}
export default home




