#!/usr/bin/env node
import { Command } from 'commander';
import version from './controllers/version';
import generateComponent from './controllers/generate-component';

const program = new Command();

program.option('-v, --version').option('-gc,--generate-component');

program.parse();

const options = program.opts();

const gc = (componentName: string) => {
  generateComponent(componentName);
};

options.version ? version() : null;
options.generateComponent ? gc(program.args[0]) : null;
