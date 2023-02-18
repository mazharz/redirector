export type RedirectObject = StaticRedirectObject | DynamicRedirectObject;

export type Target = {
  label: string;
  value: string;
};

export type StaticRedirectObject = {
  type: "static";
  handle: string;
  target: Target;
};

export type DynamicRedirectObject = {
  type: "dynamic";
  handle: string;
  target: Target;
  subTarget: Target;
};
