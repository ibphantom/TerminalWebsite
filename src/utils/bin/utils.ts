import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const ls = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'A guest, a friend,.. someone who is very curious....?';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://gui.zachk.dev', '_blank');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:admin@zachk.dev');

  return 'Opening Your Email Client...';
};

export const nano = async (args: string[]): Promise<string> => {
  return `why use nano? try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'nano'`;
};

//export const Mom = async (args?: string[]): Promise<string> => {
 //return `Hey, Mom! You're awesome💫🌟
    
//  `;
//};



// export const jax = async (args?: string[]): Promise<string> => {
 // return `Hey, Jax! I think you're awesome💞
    
   //   Love is like the wild rose-briar,

     // Friendship is like the holly-tree —

    // The olly is dark when the rose-briar blooms 

     // But which will bloom more constantly?
   
// "Love and Friendship" by Emily Bronte
 // `;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission Denied: Unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/ibphantom/terminalwebsite', '_blank');

  return 'Opening repository...';
};

export const boot = async (args?: string[]): Promise<string> => {
  let code;

  (function() {
    code = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
  })();

  return `
  Attempting to boot..
  Compiling Kernel from encrypted source....
  Concatenating drive paths to home server....

  Welcome Agent. Your Code is: ${code}
  `
};


export const banner = (args?: string[]): string => {

const clearScreen = () => {
console.clear();
};

// Clear the screen.
clearScreen();
 
  return `
███████╗ █████╗  ██████╗██╗  ██╗██╗  ██╗   ██████╗ ███████╗██╗   ██╗
╚══███╔╝██╔══██╗██╔════╝██║  ██║██║ ██╔╝   ██╔══██╗██╔════╝██║   ██║
  ███╔╝ ███████║██║     ███████║█████╔╝    ██║  ██║█████╗  ██║   ██║
 ███╔╝  ██╔══██║██║     ██╔══██║██╔═██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████╗██║  ██║╚██████╗██║  ██║██║  ██╗██╗██████╔╝███████╗ ╚████╔╝
v${packageJson.version}
`;
};
