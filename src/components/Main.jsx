import Button from "./Button";
import Advice from "./Advice";

export default function Main(props) {
  return (
    <main>
      <Button onClickFunction={props.onClickFunction} />   
      <Advice advice={props.advice} count={props.count} />
    </main>    
  );
}