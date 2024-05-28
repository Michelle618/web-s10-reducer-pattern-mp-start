import React, {useReducer} from 'react' // 👈 you'll need the reducer hook

// 👇 these are the types of actions that can change state
const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'
const intialState = {
  authorName: '',
  quoteText: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { name, value } = action.payload
      return {...state, [name]: value}
    }
    case RESET_FORM: {
      return {authorName:'', quoteText: ''}
    }
    default: {
      return state
    }
  }
}

// 👇 create your initial state object here

// 👇 create your reducer function here

export default function TodoForm({ createQuote  }) {
  const [state, dispatch] = useReducer(reducer, intialState)
  // 👇 use the reducer hook to spin up state and dispatch

  const onChange = ({ target: {name, value} }) => {
    dispatch({type: CHANGE_INPUT, payload: {name, value}})
    // 👇 implement
  }
  const resetForm = () => {
    dispatch({type: RESET_FORM})
    // 👇 implement
  }
  const onNewQuote = (evt) => {
    evt.preventDefault()
    const {authorName, quoteText} = state
    createQuote({authorName, quoteText})
    // 👇 implement
    resetForm()
  }

  // 👇 some props are missing in the JSX below:
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          type='text'
          value={state.authorName}
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          type='text'
          name='quoteText'
          placeholder='type quote'
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
