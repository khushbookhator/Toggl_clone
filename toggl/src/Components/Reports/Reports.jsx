import ReactFC from "react-fusioncharts";
import { useSelector } from "react-redux";
import { MyComponent, BarGraphData} from "./BarGraph"
import { PieCrt } from "./Pie"
import reportstyle from "./reports.module.css"
import { getTime } from './../../Utils/timeFormat';


function Reports() {

    const task = useSelector(state => state.tasks.task)

    
    return(
        <>
            <div className={reportstyle.repocont}>
                <div className={reportstyle.first}>
                    <div>
                        <h4 style={{marginTop:"15px"}}>Reports</h4>
                        <p>Summary</p>
                        <p>Details</p>
                        <p>Weekly</p>
                    </div>
                </div>
                <div className={reportstyle.second}>
                    <p>Filter by: </p>
                    <button>
                        <img className={reportstyle.imgs} src="https://img.icons8.com/?id=11797&size=2x&color=000000" alt="user"/>
                        Client
                    </button>
                    <button>
                        <img className={reportstyle.imgs} src="https://img.icons8.com/?id=1366&size=2x&color=000000" alt="team"/>
                        Team
                    </button>
                    <button>
                        <img className={reportstyle.imgs} src="https://img.icons8.com/metro/2x/contact-card.png" alt="name"/>
                        Project name
                    </button>
                </div>
                <div>
                    <BarGraphData/>
                </div>
                <br/>
                <div>
                    
              </div>
                <div style={{
                   display:"flex",
                   justifyContent:"space-between"
                }}>
                    <PieCrt/>
                </div>
            </div>
        </>
    )
}

export {Reports}
