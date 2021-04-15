import projstyles from "./project.module.css"

function Project() {
    return(
        <div className={projstyles.cont}>
            <div className={projstyles.first}>
                <h3>Projects</h3>
                <button>+ New Project</button>
            </div>
            <div className={projstyles.second}>
                <select value="Show Active">
                    <option>Active</option>
                    <option>Archived</option>
                    <option>Both</option>
                </select>
                <p>Filter by: </p>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/?id=11797&size=2x&color=000000" alt="user"/>
                    Client
                </button>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/?id=1366&size=2x&color=000000" alt="team"/>
                    Team
                </button>
                <button>
                    <img className={projstyles.imgs} src="https://img.icons8.com/metro/2x/contact-card.png" alt="name"/>
                    Project name
                </button>
            </div>
            <br/>
            <div className={projstyles.third}>
                <div style={{textAlign:"left", padding:"20px"}}>
                    <button className={projstyles.bulk}>Bulk edit</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export {Project}