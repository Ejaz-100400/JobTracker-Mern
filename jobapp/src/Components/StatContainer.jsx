export default function StatContainer({defaultStats}){
    console.log(defaultStats);
    return(
        <div className="admin-container d-flex gap-3 px-2 py-3 flex-wrap justify-content-center flex-wrap" id="stat-container">
            <div className="admin-item d-flex flex-column gap-3 p-4 justify-content-center">
                <div className="d-flex justify-content-between align-items-center fa-2x">
                    <h1 className="text-warning">{defaultStats.pending}</h1>
                    <i className="fa-solid fa-user-group admin-icon p-3"></i>
                </div>
                <h4>Pending Applications</h4>
            </div>
            <div className="admin-item  d-flex flex-column gap-3 p-4 justify-content-center">
                <div className="d-flex justify-content-between align-items-center fa-2x">
                    <h1 className="text-success">{defaultStats.interview}</h1>
                    <i className="fa-solid fa-briefcase admin-icon p-3"></i>
                </div>
                <h4>Interviews Scheduled</h4>
            </div>
            <div className="admin-item  d-flex flex-column gap-3 p-4 justify-content-center">
                <div className="d-flex justify-content-between align-items-center fa-2x">
                    <h1 className="text-danger">{defaultStats.declined}</h1>
                    <i className="fa-solid fa-briefcase admin-icon p-3"></i>
                </div>
                <h4>Jobs Declined</h4>
            </div>
        </div>
    )
}