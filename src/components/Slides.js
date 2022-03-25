import React from 'react';


function Slides({slides}) {

  const restart=()=>{
    // slides[0]
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
            {slides.map((ele)=>{
                return (
                  <>
                  <h1 data-testid="title">{ele.title}</h1>
                <p data-testid="text">{ele.text}</p>
                </>
                )
              })}  
    
            </div>
        </div>
    );

}

export default Slides;
