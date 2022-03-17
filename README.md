# react-cli-tool
react-cli-tool is a TypeScript CLI tool for creating react component boilerplate

Note: Please install this package globally for best compatibility  
`npm i -g react-ct` 

<br>

## Example usage


`rct -gc componentName`  

<br>

If you would like to generate a component further down in the file hierarchy just pass prefix the name of your component with the file path  
Example: `rct -gc Components/HomePage/componentName`  
<br>

## Output


<span style="color:green; text-decoration:underline;">CREATE</span> /Users/user/Desktop/directory/app/src/ComponentName/index.tsx  
<span style="color:green; text-decoration:underline;">CREATE</span> /Users/user/Desktop/directory/app/src/ComponentName/ComponentName.tsx  
<span style="color:green; text-decoration:underline;">CREATE</span> /Users/user/Desktop/directory/app/src/ComponentName/ComponentName.tsx

<br>

_src/ComponentName/index.tsx_

```ts
export { default } from './ComponentName';
```

_src/ComponentName/ComponentName.tsx_

```ts
import React from 'react';
import './ComponentName.scss';

const ComponentName = () => {
  return <div className="component-name">ComponentName</div>;
};

export default ComponentName;
```

_src/ComponentName/ComponentName.scss_

```css
.component-name {
}
```

<br>

## Options

-v, --version : Returns currently installed version of react-ct

-gc, --generate-component `"componentName"` : Generates component directory and corresponding files, converts given name to camelCase

<br>

## To Do:

- Implement compatibility for non TypeScript projects
- Option to generate classical components instead of hooks
- Option to ignore the default component naming convention
