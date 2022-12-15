import { InputProps } from "../props/input_props";

export function DefaultInput(props: InputProps){
    return (   
            <div className="mb-4 w-full flex flex-col content-center">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.title}>
                {props.title}
                </label>
                <input onChange={props.onChange} value={props.value} className=" border-[#467fcf] border-solid shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={props.title} type="text" placeholder={props.title}/>
            </div>
          )
  }
  