import './Result.css'

function Result(){
  return (
    <section className='result'>
      <h2>Your Result</h2>
      <div>
        <span>76 </span>
        <span>of 100</span>
      </div>
      <span>Great</span>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}

export {Result}