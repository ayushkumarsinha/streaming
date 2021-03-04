import React, {useState} from 'react';
import allData from '../../../API/allData.js';
import images from '../../../Slices/images.js';

function All() {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [page, setPage] = useState(0);
    const [dataContent, setDataContent] = useState(JSON.stringify(allData[page].page["content-items"].content));//useState(JSON.stringify(allData[page]));
    console.log(dataContent);
    return (!isError ?
        <React.Suspense fallback={<h1 isLoading={true}>Loading...</h1>}>
            <div className="ml-1 mr-1 mt-60">
                <div className="center-align">                
                    <div className="card-padding right-pane">
                        {!isLoading && dataContent && dataContent.length === 0 ? <h6><i>No records to display.</i></h6> :
                        !isLoading && dataContent && JSON.parse(dataContent).map((d, index) => 
                            <div key={index} className="card-style card card-width">
                                <img className="card-img-top" src={images[(d["poster-image"].split(".")[0])[d["poster-image"].split(".")[0].length-1]-1]} alt={d["poster-image"].split(".")[0]}/>
                                <div className="card-title">{d.name}</div>                               
                            </div>   
                        )}
                        {isLoading && <h3 className="left-pane-title">Loading...</h3>}
                    </div>
                </div>
            </div>
        </React.Suspense> 
        :
        <h5>Something went wrong</h5>
    );
}

export default All;
