import './summary.css'

function Summary(){
  return(
    <section className="summary">
        <h2>Summary</h2>
        <ul>
          <li>
            <span className='category'> 
              <img src="./assets/images/icon-reaction.svg" alt="icon" /> 
              Reaction
            </span>
            <div>
              80 <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src="./assets/images/icon-memory.svg" alt="icon" /> 
              Memory
            </span>
            <div>
              92 <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src="./assets/images/icon-verbal.svg" alt="icon" /> 
              Verbal
            </span> 
            <div>
              61 <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src="./assets/images/icon-visual.svg" alt="icon" /> 
              Visual
            </span> 
            <div>
              72 <span> / 100</span>
            </div>
          </li>
        </ul>
        <button>Continue</button>
    </section>
  )
}

export {Summary}