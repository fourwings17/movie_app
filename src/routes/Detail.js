import React, { Component } from 'react'
import './Detail.css'

export default class Detail extends Component {

    constructor(props) {
        super(props)
    }


    render() {   
        const {location, history} = this.props;    
               
        if(location.state === undefined){
          history.push('/');  
          return null;
        }

        let {title,year, summary, poster, genres} = location.state;
        console.log(title)

        return (
            <div className='detail_container'>
                <h1>{title}</h1>
                <hr />
                <div className='detail_wrap'>
                    <img src={poster} alt={title} />
                    <div className='detail_content'>
                        <h5>{genres.join(',')}</h5>
                        <p>{year}</p>
                        <p className='detail_summary'>{summary}</p>
                    </div>
                </div>
            </div>
        ) 
    }
}
