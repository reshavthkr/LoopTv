import React,{useState} from 'react'
import './Details.css'

const Details = (match) => {
    const [data ,setdata] =useState([])
    const id = match.match.params.id;
    // console.log( id);

    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(res =>res.json())
    .then(json =>{
        // console.log(json)
        setdata(json)
    })
    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };
    
    return (
        <div className="detail_container">
            <div className='details_div'>
                <img src={data.image?data.image.medium:
                    "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} alt={data.name}/>
                <div className='info'>
                    <h3>{data.name}</h3>
                    {data.genres && data.genres.map(genre=>(
                        <span key='genre' className='genreClass'>{genre}</span>
                    ))}
                    <p><strong>Language:</strong> {data.language}</p>
                    <p>
                        <strong>Status:</strong>   {data.status && data.status}
                    </p>
                    <p>
                        <strong>Rating:</strong>{" "}
                        {data.rating ? data.rating.average : "No rating"}
                    </p>
                    <p>
                        <strong>Official Site:</strong>   {data.officialSite ? (<a className='link' href={data.officialSite}
                        target='_blank'>{data.officialSite}</a>): "No official site"}
                    </p>
                    <div className='sumaryDiv'><p>{data.summary && removeTags(data.summary)}</p></div>
                </div>
            </div>
            <div>
            </div>
            
        </div>
    )
}

export default Details
