import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'Yeah... Who are you..?';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://zachk.dev', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:admin@zachk.dev');

  return 'Opening mailto:admin@zachk.dev...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/ibphantom/terminalwebsite', '_blank');

  return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
  return `
__/\\\\\\\\\\\\\\\_____/\\\\\\\\\___________/\\\\\\\\\__/\\\________/\\\__/\\\________/\\\________/\\\\\\\\\\\\_____/\\\\\\\\\\\\\\\__/\\\________/\\\_        
__\////////////\\\____/\\\\\\\\\\\\\______/\\\////////__\/\\\_______\/\\\_\/\\\_____/\\\//________\/\\\////////\\\__\/\\\///////////__\/\\\_______\/\\\_       
_____________/\\\/____/\\\/////////\\\___/\\\/___________\/\\\_______\/\\\_\/\\\__/\\\//___________\/\\\______\//\\\_\/\\\_____________\//\\\______/\\\__      
____________/\\\/_____\/\\\_______\/\\\__/\\\_____________\/\\\\\\\\\\\\\\\_\/\\\\\\//\\\___________\/\\\_______\/\\\_\/\\\\\\\\\\\______\//\\\____/\\\___     
___________/\\\/_______\/\\\\\\\\\\\\\\\_\/\\\_____________\/\\\/////////\\\_\/\\\//_\//\\\__________\/\\\_______\/\\\_\/\\\///////________\//\\\__/\\\____    
__________/\\\/_________\/\\\/////////\\\_\//\\\____________\/\\\_______\/\\\_\/\\\____\//\\\_________\/\\\_______\/\\\_\/\\\________________\//\\\/\\\_____   
_________/\\\/___________\/\\\_______\/\\\__\///\\\__________\/\\\_______\/\\\_\/\\\_____\//\\\________\/\\\_______/\\\__\/\\\_________________\//\\\\\______  
_________/\\\\\\\\\\\\\\\_\/\\\_______\/\\\____\////\\\\\\\\\_\/\\\_______\/\\\_\/\\\______\//\\\__/\\\_\/\\\\\\\\\\\\/___\/\\\\\\\\\\\\\\\______\//\\\_______ 
_________\///////////////__\///________\///________\/////////__\///________\///__\///________\///__\///__\////////////_____\///////////////________\///________
v${packageJson.version}

Type 'help' to see list of available commands.

--
Now the project is open-source 🎉 type 'repo' to check out the repository.
--
`;
};
