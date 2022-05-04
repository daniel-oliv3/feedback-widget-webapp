interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}


function App() {

  return (
   <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button />
   </div>
  )
}

export default App
