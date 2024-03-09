interface InputBoxProps {
    inputType: string;
    placeholderText: string;
    inputName: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: null |string;
}

const InputBox = ({ inputType = 'text', placeholderText = '', inputName = '', value = '', onChange }: InputBoxProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={inputName}>{placeholderText}</label>
      <input
        type={inputType}
        placeholder={placeholderText}
        name={inputName}
        id={inputName}
        defaultValue={''}
        onChange={(e) => onChange(e)}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-black outline-none focus:border-primary focus-visible:shadow-none"
      />
    </div>
  );
};

export default InputBox;