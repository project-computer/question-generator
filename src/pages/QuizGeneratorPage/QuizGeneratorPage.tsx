import { createSignal } from 'solid-js'

function QuizGeneratorPage() {
  const [question, setQuestion] = createSignal('')

  return (
    <div>
      <h1>Quiz Generator Page</h1>
      <input type="text" value={question()} onInput={e => setQuestion(e.target.value)} />
      <button onClick={() => console.log(question())}>Submit</button>
    </div>
  )
}

export default QuizGeneratorPage
