export class Funcionario{
    private _salary:number = 0;
    private _dependente:number = 0;


    constructor(salary: number, dependente: number){
        this._salary = salary;
        this._dependente = dependente
    }

    salarioBruto(): number {
        return this._salary
    }

    salarioLiquido(): number{
        let inss = this.inss()
        let dep  = this.dependente_sub()
        let irrf = this.imposto_de_renda(this._salary - inss - dep);
        let result = (this._salary  - inss - irrf).toFixed(2)
        return Number(result)
    }
    
    inss(): number {
        if(this._salary <= 1212.00){
             return ((this._salary) * 0.075)
        }
        if(this._salary <= 2427.35){
            return ((this._salary * 0.09) - 18.18)
        }
        if(this._salary <= 3641.03){
            return ((this._salary * 0.12) - 91.00)
        }
        if(this._salary <= 7087.22){
            return ((this._salary * 0.14) - 163.82)
        }
            return ((this._salary * 0.14) - ((this._salary * 0.14) - 828.39))
    }

    dependente_sub(): number{
        var iter = this._dependente
        var value = 0
        while (iter-- > 0) {
            value += 189.59
        }
        return value
    }



    imposto_de_renda(salary: number): number {
        console.log("here is : " + salary)
        if(salary <= 1903.98){
            return 0
        }
        if(salary <= 2826.65){
            return ((salary * 0.075) - 142.8)
        }
        if(salary <= 3751.05){
            return ((salary * 0.15) - 345.8)
        }
        if(salary <= 4664.68){
            return ((salary * 0.225) - 636.13)
        }
        return ((salary * 0.275) - 869.36)
    }
}
