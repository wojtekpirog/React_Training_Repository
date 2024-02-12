export default function Button(props) {
  const { className, text, onClickFunction } = props;
  return <button className={className} onClick={onClickFunction}>{text}</button>     
}
