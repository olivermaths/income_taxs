import { MessageProps } from "../props/message_props"

export function Message(props: MessageProps){
    if(props.showMessage && props.message != null){
      return (
        <div className="bg-green-200 rounded-lg w-full grid justify-center content-center ">
          <p>{props.message}</p>
        </div>
      )
    }
    return(<div></div>)
  }
  