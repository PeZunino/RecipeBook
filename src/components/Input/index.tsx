import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);
  return (
    <Container inputFocus={focus}>
      {Icon && <Icon size={25} />}
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} {...rest} />
    </Container>
  );
};

export default Input;
