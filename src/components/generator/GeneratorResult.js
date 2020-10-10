import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Shirt from '../../images/13.jpg'


const GeneratorResult = ( {topText, bottomText, ia} ) => {

    const handleClick = () => {
        let randomImage = random(memeList.length)
        setImage(memeList[randomImage].url)
    }

    const random = num => {
        return Math.floor((Math.random() * num))
    }

    const [image, setImage]  = useState(null)
    const [memeList, setSetMemeList] = useState([])

    useEffect(() => {
        axios
            .get("https://api.imgflip.com/get_memes")
            .then(response => {
                setSetMemeList(response.data.data.memes)
            })
            .catch(error => alert(error.message))
    }, [])



    return (
        <div className='result'>
            <div className='generator-result'>
                <img className='img-generated' src={image? image : Shirt} alt='qwer tryui' />
                <h1 className='text1'>{topText}</h1>
                <h1 className='text2'>{bottomText}</h1>
            </div>
            <div className='generate-btn'>
                <button onClick={handleClick} className='btn new-image'>Change Image</button>
                <button className='btn new-image'>save</button>
            </div>
        </div>
    )
}

export default GeneratorResult