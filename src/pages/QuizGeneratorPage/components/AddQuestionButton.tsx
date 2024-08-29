const AddQuestionButton = () => {
  function handleClickWrapper() {
    // Add your custom logic here
    console.log('Button clicked')
  }
  return (
    <button class="btn" onClick={handleClickWrapper}>
      Button
    </button>
  )
}

export default AddQuestionButton
