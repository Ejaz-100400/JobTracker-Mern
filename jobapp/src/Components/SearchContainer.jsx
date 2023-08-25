export default function SearchContainer(){
    return(
        <>
         {/* <div className="all-job-container p-3 position-relative" style={search?{height:'300px'}:{height:'100px'}}>
        <h1>Search Job</h1>
        <i class="fa-solid fa-magnifying-glass position-absolute" onClick={()=>{setsearch(prev=>!prev)}}></i> */}
        {/* Search Job Form */}
        {/* <Form method="post" className=" flex-column justify-content-center align-items-center gap-3 p-3"
        style={search?{display:'flex'}:{display:'none'}}>
            <div className="d-flex align-items-center gap-3 alljob-form p-2">
                <FormRow type='text' name='position'/>
                <FormRow type='text' name='company' />
                <FormRow type='text' name='jobLocation' />
                <div className='form-row w-100'>
                    <label htmlFor='jobStatus' className='form-label'>
                        job status
                    </label>
                    <select name="jobStatus" id="jobStatus" className="form-select"
                    defaultValue={JOB_STATUS.PENDING}>
                        {Object.values(JOB_STATUS).map((itemValue)=>{
                            return (
                                <option key={itemValue} value={itemValue}>
                                    {itemValue}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-row w-100'>
                    <label htmlFor='jobType' className='form-label'>
                        job type
                    </label>
                    <select name="jobType" id="jobType" className="form-select"
                    defaultValue={JOB_TYPE.FULL_TIME}>
                        {Object.values(JOB_TYPE).map((itemValue)=>{
                            return (
                                <option key={itemValue} value={itemValue}>
                                    {itemValue}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button className="home-btn w-50 btn">
                Submit
            </button>
        </Form>
    </div> */}
    </>
    )
}