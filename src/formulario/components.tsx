import type { ComponentChildren } from "preact";

export const InputField = (props: {
  labelText: string;
  labelId: string;
  children: ComponentChildren;
}) => {
  return (
    <div class="m-3 flex w-full max-w-xl flex-col">
      <label htmlFor={props.labelId} class="text-base-content">
        {props.labelText}
      </label>
      {props.children}
    </div>
  );
};

export const RadioContainer = (props: {
  labelText: string;
  labelId: string;
  children: ComponentChildren;
}) => {
  return (
    <InputField labelText={props.labelText} labelId={props.labelId}>
      <div class="rounded-xl border border-primary-focus bg-base-300 p-3">
        {props.children}
      </div>
    </InputField>
  );
};

export const RadioForm = (props: { title: string; children: ComponentChildren }) => {
  return (
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text text-base-content">{props.title}</span>
        {props.children}
      </label>
    </div>
  );
};
