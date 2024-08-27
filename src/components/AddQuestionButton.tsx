import { invoke } from '@tauri-apps/api/tauri'

const AddQuestionButton = () => {
  const handleClick = async () => {
    try {
      const response = await invoke('merge_documents')
      if (response) {
        console.log('Merged documents successfully')
      }
      return true
    } catch (error) {
      console.error('Error:', error)
      return false
    }
  }
  const handleClickWrapper = () => {
    void handleClick()
  }
  return (
    <button
      class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
      onClick={handleClickWrapper}
    >
      Button
    </button>
  )
}

export default AddQuestionButton
