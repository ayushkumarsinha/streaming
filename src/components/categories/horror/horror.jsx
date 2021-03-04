import React, {useState} from 'react';
// import axios from 'axios';
import dataPG1 from '../../../API/CONTENTLISTINGPAGE-PAGE1.json';
import images from '../../../Slices/images.js';

function Horror() {
    const [isLoading, setLoading] = useState(false);
    // const [isDataError, setDataError] = useState(false);
    const [isError, setError] = useState(false);
    // const [allData, setAllData] = useState([]);
    // const [data, setData] = useState(JSON.stringify(dataPG1));
    const [dataContent, setDataContent] = useState(JSON.stringify(dataPG1.page["content-items"].content));
    // const [yearValue, setYearValue] = useState(0);
    // const [launchSuccess, setLaunchSuccess] = useState(null);
    // const [landSuccess, setLandSuccess] = useState(null);
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         setDataError(false);
    //         setLoading(true);      
    //         try {
    //             const response = await axios('https://api.spacexdata.com/v3/launches?limit=100');      
    //             setAllData(response.data);
    //         } catch (error) {
    //             setDataError(true);
    //         }
    //     };
    //     fetchData();
    // },[isDataError]);
    // useEffect(()=>{
    //     // var url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    //     // if(launchSuccess !== null)
    //     //     url = url+('&launch_success=' + launchSuccess);
    //     // if(landSuccess !== null)
    //     //     url = url+('&land_success=' + landSuccess);
    //     // if(yearValue !== 0)
    //     //     url = url+('&launch_year=' + yearValue);
    //     // const fetchYearFilterData = async () => {
    //     //     setError(false);
    //     //     setLoading(true);      
    //     //     try {
    //     //         const response = await axios(url);      
    //     //         setData(response.data);
    //     //     } catch (error) {
    //     //         setError(true);
    //     //     }
    //     //     setLoading(false);
    //     // };
    //     // fetchYearFilterData();
    //     //setData(dataPG1);
    // },[yearValue, launchSuccess, landSuccess]);
    return (!isError ?
        <React.Suspense fallback={<h1 isLoading={true}>Loading...</h1>}>
            <div className="ml-1 mr-1 mt-60">
                <div className="center-align">
                {/* <div className="pane-container center-align"> */}
                    {/* <div className="filter-area">
                        <div className="left-pane-style">
                            <h5 className="left-pane-title">Filters</h5>
                            <div className="text-center">Launch Year</div>
                            <hr className="hr-m" />
                            <div className="row year-margin">
                                {!isLoading && allData && 
                                    allData.reduce((u,i)=>{return u.includes(i.launch_year)?u:[...u,i.launch_year]},[]).map((d, index) => 
                                    <button className={yearValue === d ? "pane-container left-pane-button left-pane-button-color-dark" : "pane-container left-pane-button left-pane-button-color" }
                                            key={index}
                                            onClick={()=>{setYearValue(d)}}
                                            >{d}</button>)
                                }
                            </div>
                            <button className={yearValue === 0 ? "pane-container left-pane-button-clear left-pane-button-color-dark" : "pane-container left-pane-button-clear left-pane-button-color" }
                                        onClick={()=>{setYearValue(0)}}
                                        ><span className="m-a">All</span></button>
                            <div className="filter-spacing"></div>
                            <div className="text-center">Successful Launch</div>
                            <hr className="hr-m" />
                            <div className="row year-margin">
                                <button className={launchSuccess !== null && launchSuccess === true ? "pane-container left-pane-button left-pane-button-color-dark" : "pane-container left-pane-button left-pane-button-color" }
                                    id="launch_success_true"
                                    onClick={()=>{setLaunchSuccess(true)}}>True</button>
                                <button className={launchSuccess !== null && launchSuccess === false ? "pane-container left-pane-button left-pane-button-color-dark" : "pane-container left-pane-button left-pane-button-color" }
                                    id="launch_success_false"
                                    onClick={()=>{setLaunchSuccess(false)}}>False</button>
                            </div>
                            <button className={launchSuccess === null ? "pane-container left-pane-button-clear left-pane-button-color-dark" : "pane-container left-pane-button-clear left-pane-button-color" }
                                onClick={()=>{setLaunchSuccess(null)}}
                                ><span className="m-a">All</span></button>
                            <div className="filter-spacing"></div>
                            <div className="text-center">Successful Landing</div>
                            <hr className="hr-m" />
                            <div className="row year-margin">
                                <button className={landSuccess !== null && landSuccess === true ? "pane-container left-pane-button left-pane-button-color-dark" : "pane-container left-pane-button left-pane-button-color" }
                                    id="land_success_true"
                                    onClick={()=>{setLandSuccess(true)}}>True</button>
                                <button className={landSuccess !== null && landSuccess === false ? "pane-container left-pane-button left-pane-button-color-dark" : "pane-container left-pane-button left-pane-button-color" }
                                    id="land_success_false"
                                    onClick={()=>{setLandSuccess(false)}}>False</button>
                            </div>
                            <button className={landSuccess === null ? "pane-container left-pane-button-clear left-pane-button-color-dark" : "pane-container left-pane-button-clear left-pane-button-color" }
                                onClick={()=>{setLandSuccess(null)}}
                                ><span className="m-a">All</span></button>
                        </div>
                    </div> */}
                    <div className="card-padding right-pane">
                        {!isLoading && dataContent && dataContent.length === 0 ? <h6><i>No records to display.</i></h6> :
                        !isLoading && dataContent && JSON.parse(dataContent).map((d, index) => 
                            <div key={index} className="card-style card card-width">
                                <img className="card-img-top" src={images[(d["poster-image"].split(".")[0])[d["poster-image"].split(".")[0].length-1]-1]} alt={d["poster-image"].split(".")[0]}/>
                                <div className="card-title">{d.name}</div>
                                {/* <div className="card-body"> */}
                                    {/* <h5 className="card-title">{d.name}</h5> */}
                                    {/* <div className="card-text-spacing card-title blue-color"><strong>{d.mission_name + "# " + d.flight_number}</strong></div>
                                    <div className="card-text-spacing"><strong>Mission Ids:</strong></div>
                                    <ul className="card-text-spacing"> 
                                        {d.mission_id.length>0 ?
                                        (d.mission_id.map((mission, m_i)=><li className="blue-color" key={m_i}>{mission}</li>))
                                        : <li className="blue-color"><i>No mission ids</i></li>}
                                    </ul>
                                    <div className="card-text-spacing"><span className="card-text-info"><strong>Launch Year:</strong></span><span className="blue-color">{d.launch_year}</span></div>
                                    <div className="card-text-spacing"><span className="card-text-info"><strong>Successful Launch:</strong></span><span className="blue-color">{JSON.stringify(d.launch_success)}</span></div>
                                    <div className="card-text-spacing"><span className="card-text-info"><strong>Successful Landing:</strong></span><span className="blue-color">{JSON.stringify(d.rocket.first_stage.cores[0].land_success)}</span></div> */}
                                {/* </div> */}
                            </div>   
                        )}
                        {isLoading && <h3 className="left-pane-title">Loading...</h3>}
                    </div>
                    {/* {!isLoading && dataContent && dataContent.length === 0 ? <h6><i>No records to display.</i></h6> : */}
                        {/* {JSON.parse(dataContent).map((d, index) => 
                        <div class="card" key={index}>
                            <img class="card-img-top" src={('../../d["poster-image"]')} alt={d["poster-image"]}></img>
                            <div class="card-body">
                                <h5 class="card-title">{d.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        )}
                        {isLoading && <h3 className="left-pane-title">Loading...</h3>}
                        {console.log(JSON.parse(dataContent))} */}
                        {/* {JSON.parse(dataContent)} */}
                </div>
            </div>
        </React.Suspense> 
        :
        <h5>Something went wrong</h5>
    );
}

export default Horror;
