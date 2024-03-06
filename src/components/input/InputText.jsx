import classNames from "classnames";

const InputText = ({
  type="text",
  id,
  name,
  value,
  defaultValue,
  className,
  style,
  placeholder,
}) => {
  return (
    <>
      <div style={style} className={classNames("input-set",className)}>
        <input type={type} defaultValue={defaultValue} name={name} id={id} placeholder={placeholder} />
      </div>
    </>
  )
}

export default InputText;