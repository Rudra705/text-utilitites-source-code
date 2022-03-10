import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText ] = useState("")

    const handleUpClick = () =>{
        // console.log('clicked')
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () => {  
        // console.log("clicked")
        let newText2 = text.toLowerCase()
        setText(newText2)
    }

    const clearText = () => {  
        let newText3 = ""
        setText(newText3)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleExtraSpaces = ()=>{
        let newText_without_spaces = text.split(/[ ]+/)
        setText(newText_without_spaces.join(" "))
    }

    const copy = () => {
        navigator.clipboard.writeText(text)
    }

    return (

        <>
        <div className = "container">
            <h2>{props.heading}</h2>
        
            <form>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="3" onChange={handleOnChange} value = {text}  placeholder="Enter text here."></textarea>
                </div>
           </form>

           <button className = "btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
           <button className = "btn btn-outline-warning mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
           <button className = "btn btn-outline-warning mx-1 my-1" onClick={copy}>Copy</button>
           <button className = "btn btn-outline-info mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
           <button className = "btn btn-outline-danger mx-1 my-1" onClick={clearText}>Clear</button>
           

        </div>

        <div className="container">
            <h2>Your text summary</h2>
            
            <p>Your text has {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</p>
            <p>It will take {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length}  minutes to read.</p>
        </div>
        </>
    )
}
