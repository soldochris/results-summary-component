import './Result.css'

function Result({data}){

  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const averageScore = Math.round(totalScore / data.length);

  console.log(data)
  return (
    <section className='result'>
      <h2>Your Result</h2>
      <div>
        <span>{averageScore}</span>
        <span>of 100</span>
      </div>
      <span>Great</span>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}

export {Result}