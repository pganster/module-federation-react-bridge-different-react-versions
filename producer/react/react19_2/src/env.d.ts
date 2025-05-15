/// <reference types="@rsbuild/core/types" />
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
