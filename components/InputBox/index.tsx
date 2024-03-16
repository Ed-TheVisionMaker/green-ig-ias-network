'useClient'
import { useEffect, useState } from 'react';

interface InputBoxProps {
    inputType: string;
    placeholderText: string;
    inputName: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: null |string;
}

const InputBox = ({ inputType = 'text', placeholderText = '', inputName = '', value = '', onChange }: InputBoxProps) => {
  const[isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="mb-6">
      <label htmlFor={inputName} className=''>{placeholderText}</label>
      {isClient &&(<input
        type={inputType}
        placeholder={placeholderText}
        name={inputName}
        id={inputName}
        defaultValue={''}
        onChange={(e) => onChange(e)}
        className="w-full rounded-md mt-1 border border-stroke bg-ginWhite px-5 py-3 text-black outline-none focus:border-primary focus-visible:shadow-none"
      />)}
    </div>
  );
};

export default InputBox;