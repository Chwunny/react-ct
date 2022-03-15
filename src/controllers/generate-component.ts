import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
// import chalk from 'chalk';
const chalk = require('chalk');

const generateComponent = (componentName: string) => {
  const split = componentName.split('/');

  const capitalizedName = split[split.length - 1].charAt(0).toUpperCase() + split[split.length - 1].slice(1);
  split.pop();
  split.push(capitalizedName);
  const joinedPath = split.join('/');

  const filePath = path.join(process.cwd() + '/src/', joinedPath);

  fs.mkdir(filePath, (err) => {
    if (err) {
      return console.error(err);
    }
    createFiles(capitalizedName, filePath);
  });
};

export default generateComponent;

const createFiles = (componentName: string, filePath: string) => {
  const files = {
    index: '/index.tsx',
    component: `/${componentName}.tsx`,
    scss: `/${componentName}.scss`,
  };

  fs.writeFile(filePath + files.index, templates.index(componentName), errorHandler);
  console.log(chalk.green.underline('CREATE') + ' ' + filePath + files.index);
  fs.writeFile(filePath + files.component, templates.component(componentName), errorHandler);
  console.log(chalk.green.underline('CREATE') + ' ' + filePath + files.component);
  fs.writeFile(filePath + files.scss, templates.scss(componentName), errorHandler);
  console.log(chalk.green.underline('CREATE') + ' ' + filePath + files.scss);
};

const templates = {
  index: (name: string) => `export { default } from './${name}'`,
  component: (name: string) => `import React from 'react'
    import "./${name}.scss"
  
    const ${name} = () => {
      return (
        <div>${name}</div>
      )
    }
    
    export default ${name}`,
  scss: (name: string) => ``,
};

const errorHandler = (err: any) => {
  if (err) {
    console.error(err);
  }
};
