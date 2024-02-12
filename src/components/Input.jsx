export default function Input(props) {
  const { className, placeholder, value, onChange } = props;
  return <input className={className} placeholder={placeholder} value={value} onChange={onChange} />
}