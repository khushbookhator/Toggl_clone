import ReactFC from "react-fusioncharts";
import {chartConfigs, MyComponent} from "./BarGraph"
import { PieCrt } from "./Pie"
import reportstyle from "./reports.module.css"


function Reports() {
    
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
                    <ReactFC {...chartConfigs} />
                </div>
                <br/>
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
