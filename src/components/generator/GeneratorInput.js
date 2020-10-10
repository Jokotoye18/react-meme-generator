import React, {useState} from 'react'
import Result from './GeneratorResult'


const GeneratorInput = () => {

    const [topInput, setTopInput] = useState('');
    const [bottomInput, setBottomInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div className='generator-input'>
            <form onSubmit={handleSubmit} className='generator-form'>
                <input 
                    className='form-input'
                    name='top-input'
                    value={topInput}
                    onChange={(e) => setTopInput(e.target.value)}
                    placeholder='Enter top text here'
                />
                <input 
                    className='form-input'
                    name='bottom-input'
                    value={bottomInput}
                    onChange={(e) => setBottomInput(e.target.value)}
                    placeholder='Enter bottom text here'
                />
                {/* <button className='btn'>generate</button>
                 */}
            </form>
        </div>
        <Result topText={topInput} bottomText={bottomInput} />
        </>
    )
}

export default GeneratorInput
