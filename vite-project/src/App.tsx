import './App.css'
import FileInput from './components/FileInput'
import { useState, useEffect } from 'react'
import { predictTypeOfGlass } from './utils/calculate-type-of-glass'
import { Table } from './components/Table'

function App(): JSX.Element {
  const [file, setFile] = useState<number[][] | null>(null)
  const [successRate, setSuccessRate] = useState<number>(0)

  useEffect(() => {
    let success = 0
    let failed = 0

    if (!file) return

    file.forEach(array => {
      if (array[9] === array[10]) {
        success++
      } else {
        failed++
      }
    })
    console.log(success, failed)
    setSuccessRate((success / 214) * 100)
  }, [file])

  const handleFileChange = (event: any) => {
    const fileRead = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = (e: any) => {
      const contents = e.target.result;
      const data = contents.split('\n').map((data: string) => {
        const dataInNumber = data.split(',').map((eachData: string) => parseFloat(eachData))
        dataInNumber.shift()

        const prediction = predictTypeOfGlass(dataInNumber)
        dataInNumber.push(prediction)

        return dataInNumber
      })
      data.pop()

      setFile(data);
    };

    if (fileRead) {
      reader.readAsText(fileRead);
    }
  };

  return (
    <main>
      <FileInput handleChange={handleFileChange} />
      <p className='text-center mb-4'>
        Success rate: {successRate}%
      </p>
      <section className='flex justify-center items-center'>
        <section className='w-[80vw] h-[400px]'>
          {
            file !== null && (
              <Table table_data={file} />
            )
          }
        </section>

      </section>
    </main>
  )
}

export default App
