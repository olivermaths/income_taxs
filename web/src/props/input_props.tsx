export class InputProps{
    title: string
    value: any
    onChange: React.ChangeEventHandler<HTMLInputElement>
    constructor(title:string, value:any, onChange: React.ChangeEventHandler<HTMLInputElement>){
      this.title = title
      this.value = value
      this.onChange = onChange
    }
  }
  