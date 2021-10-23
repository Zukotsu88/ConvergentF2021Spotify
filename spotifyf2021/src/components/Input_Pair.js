// this is a feeble attempt to create the three spotify buttons next to eachother
export default function Input_Pair(props) {
    return  (
            <div className="input_pair">
                <input type="text" className="short_input" placeholder={props.firstPlaceHolder}></input>
                <input type="text" className="short_input" placeholder={props.secondPlaceHolder}></input>
            </div>
    )
}