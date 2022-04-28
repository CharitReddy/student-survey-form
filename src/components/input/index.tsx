import "./index.css";

type InputProps = {
  type: string;
  required: boolean;
  name: string;
  value: string;
  onChange: any;
  label: string;
  placeholder: string;
};

const Input = ({
  type,
  required,
  name,
  value,
  onChange,
  label,
  placeholder,
}: InputProps) => {
  return (
    <div className='form__group'>
      <input
        type={type}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
        className='form__field'
        placeholder={placeholder}
      />
      <label htmlFor={name} className='form__label'>
        {label}
      </label>
    </div>
  );
};

export default Input;
