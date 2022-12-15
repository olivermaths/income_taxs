import { any, object } from 'prop-types'
import { ChangeEvent, useState } from 'react'
import { DefaultInput } from './components/input'
import { Message } from './components/message'




function App() {
  let response:any;
  const [showmessage, setMesasge] = useState(false)
  const [salary, setSalary] = useState(0)
  const [dependentes, setdependentes] = useState(0)
  const [data, setdata] = useState({"response": response})
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`http://localhost:3333/get?salary=${salary}&dependente=${dependentes}`)
    .then(response => response.json())
    .then(body => setdata(body))
    if(data.response){
      setMesasge(true)
    }else{
      setMesasge(false)
    }
  }
  function onSalaryInput(e: ChangeEvent<HTMLInputElement>){
    let value =  e.target.value == ""? 0 :  parseInt(e.target.value);
    if(!Number.isNaN(value)){
      setSalary(value)
    }
  }  
  function onDependenteInput(e: ChangeEvent<HTMLInputElement>){
    let value =  e.target.value == ""? 0 :  parseInt(e.target.value);
    if(!Number.isNaN(value)){
      setdependentes(value)
    }
  }
  return (
    <div className="bg-white-600 w-screen h-screen m-0 p-0">
      <header className='bg-[#467fcf] w-screen h-24 grid content-center '>
          <h1 className="m-auto ml-24 text-start text-white font-bold">LoP</h1>
      </header>
      <div className="grid m-0 h-4/5 justify-center content-center">
        <form onSubmit={e => handleSubmit(e)}  className="grid content-center justify-center bg-white shadow-md rounded-md mb-4 w-[320px] h-[320px]">
          <DefaultInput title={'Salario'} value={salary} onChange={onSalaryInput}  />
          <DefaultInput title={'Dependentes'} value={dependentes} onChange={onDependenteInput} />
          <button type='submit' className='h-12 border-none rounded-lg bg-[#467fcf] font-bold text-white'> Calcular </button>
        </form>
        <Message message={`Seu salário liquido é: ${data.response}`} showMessage={showmessage} />
      </div>
    </div>
  )
}

export default App
