import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    
    constructor(props) {
        super(props);       
    }

    render() {

        console.log(this.props)

        return (
            <div className='about_container'>
                <h1>About..</h1>
                <p>내려놓으면 된다
구태여 네 마음을 괴롭히지 말거라
부는 바람이 예뻐
그 눈부심에 웃던 네가 아니었니 

받아들이면 된다
지는 해를 깨우려 노력하지 말거라
너는 달빛에 더 아름답다</p>
            </div>
        )
    }
}
