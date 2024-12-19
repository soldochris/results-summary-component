import './summary.css'

function Summary({data}){

  return(
    <section className="summary">
        <h2>Summary</h2>
        <ul>
          <li>
            <span className='category'> 
              <img src={data[0].icon} alt="icon" /> 
              {data[0].category}
            </span>
            <div>
              {data[0].score} <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src={data[1].icon} alt="icon" /> 
              {data[1].category}
            </span>
            <div>
            {data[1].score} <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src={data[2].icon} alt="icon" /> 
              {data[2].category}
            </span> 
            <div>
            {data[2].score} <span>/ 100</span>
            </div>
          </li>
          <li>
            <span className='category'>
              <img src={data[3].icon} alt="icon" /> 
              {data[3].category}
            </span> 
            <div>
            {data[3].score} <span> / 100</span>
            </div>
          </li>
        </ul>
        <button>Continue</button>
    </section>
  )
}

export {Summary}