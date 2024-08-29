import { createSignal } from 'solid-js'

const QuestionCollapse = () => {
  const [isCollapsed, setIsCollapsed] = createSignal(true)

  return (
    <div
      tabindex="0"
      class={`collapse collapse-arrow border-base-300 bg-base-200 border ${
        isCollapsed() ? 'collapsed' : ''
      }`}
    >
      <div
        class="collapse-title text-xl font-medium"
        onClick={() => setIsCollapsed(!isCollapsed())}
      >
        Focus me to see content
      </div>
      {!isCollapsed() && (
        <div class="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      )}
    </div>
  )
}

export default QuestionCollapse
