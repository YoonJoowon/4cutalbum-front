import {
  ChangeEventHandler,
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import styled, { CSSProp } from 'styled-components';
import DeleteIcon from '@Assets/icons/DeleteIcon';

type Props = {
  label?: ReactNode;
  placeholder?: string;
  error?: boolean;
  children: ReactElement;
};

const Input = ({ label, placeholder, children, error }: PropsWithChildren<Props> & HTMLAttributes<HTMLDivElement>) => {
  const child = Children.only<ReactElement<{ error?: boolean; id?: string }>>(children);
  const id = '1';
  const removeValue = () => {
    // setValue('');
  };

  return (
    <Layout>
      <StyledLabel>{label}</StyledLabel>
      <InputWrapper>
        {cloneElement(child, { id, ...child.props })}
        {error && (
          <DeleteButtonWrapper onClick={removeValue}>
            <DeleteIcon color="#666666" width="20" height="20" />
          </DeleteButtonWrapper>
        )}
      </InputWrapper>
    </Layout>
  );
};

export default Input;

const Layout = styled.div``;

const StyledLabel = styled.label``;

type TextFieldProps = {
  error?: boolean;
  $style?: CSSProp;
} & InputHTMLAttributes<HTMLInputElement>;

Input.TextField = forwardRef(({ error, $style, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <StyledInput ref={ref} {...props} />;
});
Input.TextField.displayName = 'TextField';

const InputWrapper = styled.div`
  position: relative;
`;

type StyledInputProps = Pick<TextFieldProps, 'error'>;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  border: none;
  height: 96px;
  background-color: #f7f7f7;
  color: ${(props) => (props.error ? 'red' : 'black')};
  border-bottom: ${(props) => (props.error ? '2px solid red' : 'none')};

  @media screen and (max-width: 768px) {
    height: 48px;
  }
`;

const DeleteButtonWrapper = styled.button`
  cursor: pointer;
  position: absolute;

  right: 1.25rem; // 오른쪽 패딩
  top: calc(50% - 10px);
  @media screen and (max-width: 768px) {
    right: 1.25rem; // 오른쪽 패딩
    transform: translateY(70%);
  }
`;
