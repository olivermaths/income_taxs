import express, { response } from 'express'
import { Funcionario } from './models/funcionario'
const app = express()

app.get('/get', (request, reponse)=>{
    try {
        let salary = parseInt(request.query.salary as string)
        let dependente = parseInt(request.query.dependente as string)
        let c1 = new Funcionario(salary, dependente)
        return reponse.json({"response": c1.salarioLiquido()})    

    } catch (error) {
        return reponse.json({"response": null})    
        
    }


})

app.listen(3333)