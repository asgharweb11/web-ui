import React from "react"
import {
    useRouteMatch,
} from "react-router-dom"

const Dashboard = () => {
    const match = useRouteMatch("/dashboard/:name")
    
    console.log("match : " , match)

    return (
        <React.Fragment>
            { 
                match !== null ? 
                    match.isExact ? (
                        <h1>Page Dashboard/{match.params.name}</h1>
                    ) : (
                        <h1>Only Page Dashboard</h1>
                    )
                : (<h1>Only Page Dashboard</h1>)
            }
        </React.Fragment>
    )
}

export default Dashboard;