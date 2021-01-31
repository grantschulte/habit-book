import React from "react";

type FormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }: FormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
