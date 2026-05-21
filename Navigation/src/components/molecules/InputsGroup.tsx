import {InputText} from "../atoms";

interface campos {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

interface Props {
  fields: campos[];
}

const InputsGroup = ({ fields }: Props) => {
  return (
    <>
      {fields.map((f, i) => (
        <InputText
          key={i}
          label={f.label}
          placeholder={f.placeholder}
          value={f.value}
          onChangeText={f.onChangeText}
        />
      ))}
    </>
  );
};

export default InputsGroup;
