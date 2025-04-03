import Button from "./components/Button"

const App = () => {
  return (
    <div>
      <Button extra={'hello'}>
        {{
          class: 'default',
          label: 'Light'
        }}
      </Button>
      <Button>
        {{
          class: 'dark',
          label: 'Light'
        }}
      </Button>
      {/* <Button label={'Dark'} className={'dark'} /> */}
    </div>
  )
}

export default App
