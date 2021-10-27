export default function Feedback(props){
    if (props.correction){
        return(
            <div>
                <h3>{`Opps, that was ${props.correction}`}</h3>
            </div>
        )
        }else return(
            <div>
                <h3>Correct!</h3>
            </div>
        )
}