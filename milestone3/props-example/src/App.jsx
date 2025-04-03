import Button from "./components/Button"

const App = () => {
  return (
    <div>
      <Button>
        {{
          class: 'default',
          label: 'Light'
        }}
      </Button>
      {/* <Button label={'Dark'} className={'dark'} /> */}
    </div>
  )
}

export default App
