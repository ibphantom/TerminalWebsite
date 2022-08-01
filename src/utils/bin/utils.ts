import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
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

export const sudo = async (args?: string[]): Promise<string> => {
  function CheckPassword(inputtxt) 
  { 
    var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      if(inputtxt.value.match(passw)) 
    { 
      alert('Correct, try another...')
      return true;
      }
      else
    { 
      alert('Wrong...!')
      return false;
    }
}
  return `Permission Denied: Unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/ibphantom/terminalwebsite', '_blank');

  return 'Opening repository...';
};

export const boot = async (args?: string[]): Promise<string> => {
  return `
  Attempting to boot..
  Compiling Kernel from encrypted source....
  Concatenating drive paths to home server....
  
  Welcome Agent.
  
  55 53 43 59 42 45 52 43 4F 4D
  `;
  return `
  55 SC 59 42 45 52 43 4F 4D 20

  55 SC 59 42 E 52 43 4F 4D
  `;
  return `
  55 SC 59 42 E 52 COM

  55 SC59 42 E 52COM

  55 SC59 42 ERCOM
 
  USC59 B ERCOM

  USCY B ERCOM

  USCYBERCOM
  
╔╗─╔╗╔═══╗╔═══╗╔╗──╔╗╔══╗─╔═══╗╔═══╗╔═══╗╔═══╗╔═╗╔═╗
║║─║║║╔═╗║║╔═╗║║╚╗╔╝║║╔╗║─║╔══╝║╔═╗║║╔═╗║║╔═╗║║║╚╝║║
║║─║║║╚══╗║║─╚╝╚╗╚╝╔╝║╚╝╚╗║╚══╗║╚═╝║║║─╚╝║║─║║║╔╗╔╗║
║║─║║╚══╗║║║─╔╗─╚╗╔╝─║╔═╗║║╔══╝║╔╗╔╝║║─╔╗║║─║║║║║║║║
║╚═╝║║╚═╝║║╚═╝║──║║──║╚═╝║║╚══╗║║║╚╗║╚═╝║║╚═╝║║║║║║║
╚═══╝╚═══╝╚═══╝──╚╝──╚═══╝╚═══╝╚╝╚═╝╚═══╝╚═══╝╚╝╚╝╚╝
  
  
  `;
};

export const banner = (args?: string[]): string => {
  return `
███████╗ █████╗  ██████╗██╗  ██╗██╗  ██╗   ██████╗ ███████╗██╗   ██╗
╚══███╔╝██╔══██╗██╔════╝██║  ██║██║ ██╔╝   ██╔══██╗██╔════╝██║   ██║
  ███╔╝ ███████║██║     ███████║█████╔╝    ██║  ██║█████╗  ██║   ██║
 ███╔╝  ██╔══██║██║     ██╔══██║██╔═██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████╗██║  ██║╚██████╗██║  ██║██║  ██╗██╗██████╔╝███████╗ ╚████╔╝
v${packageJson.version}

Type 'help' to see list of available commands.
--
The project is open-source 🎉 type 'repo' to check out the repository.
New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
New 🎉: New command 'neofetch', for you linux.
--
`;
};
