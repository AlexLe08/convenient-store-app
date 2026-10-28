// TypeScript 5.6+ requires type declarations for side-effect imports.
// Next.js provides these through next-env.d.ts, but the declarations
// aren't always picked up (VS Code TS version drift, Next.js version
// differences). Declaring them explicitly makes the imports type-safe
// regardless of the surrounding tooling.
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}