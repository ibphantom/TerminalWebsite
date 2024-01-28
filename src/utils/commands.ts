import packageJson from '../../package.json';
import themes from '../../themes.json';
import { history } from '../stores/history';
import { theme } from '../stores/theme';

const hostname = window.location.hostname;

const checkSudo = () => {
  // Implement the check for sudo privileges based on your application's authentication mechanism
  // For demonstration purposes, this function always returns true
  return true;
};

// Wrapper function to check for sudo
const sudoWrapper = (cmd: (args: string[]) => Promise<string> | string) => {
  return async (args: string[]) => {
    const isSudo = args[0] === 'sudo';
    if (isSudo) {
      if (checkSudo()) {
        return await cmd(args.slice(1)); // Execute the command without 'sudo'
      } else {
        return "Permission denied: You must be logged in as sudo to use this command.";
      }
    } else {
      return await cmd(args); // Execute the command without 'sudo'
    }
  };
};

export const commands: Record<string, (args: string[]) => Promise<string> | string> = {
  help: () => 'Available commands: ' + Object.keys(commands).join(', '),
  hostname: () => hostname,
  whoami: () => 'guest',
  date: sudoWrapper(async () => new Date().toLocaleString()),
  vi: sudoWrapper(() => `why use vi? try 'emacs'`),
  vim: sudoWrapper(() => `why use vim? try 'emacs'`),
  emacs: sudoWrapper(() => `why use emacs? try 'vim'`),
  echo: sudoWrapper((args: string[]) => args.join(' ')),
  sudo: sudoWrapper((args: string[]) => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    return `Permission denied: unable to run the command '${args[0]}' as root.`;
  }),
  theme: sudoWrapper((args: string[]) => {
    const usage = `Usage: theme [args].
    [args]:
      ls: list all available themes
      set: set theme to [theme]

    [Examples]:
      theme ls
      theme set gruvboxdark
    `;
    if (args.length === 0) {
      return usage;
    }

    switch (args[0]) {
      case 'ls': {
        let result = themes.map((t) => t.name.toLowerCase()).join(', ');
        result += `You can preview all these themes here: ${packageJson.repository.url}/tree/master/docs/themes`;

        return result;
      }

      case 'set': {
        if (args.length !== 2) {
          return usage;
        }

        const selectedTheme = args[1];
        const t = themes.find((t) => t.name.toLowerCase() === selectedTheme);

        if (!t) {
          return `Theme '${selectedTheme}' not found. Try 'theme ls' to see all available themes.`;
        }

        theme.set(t);

        return `Theme set to ${selectedTheme}`;
      }

      default: {
        return usage;
      }
    }
  }),
  repo: sudoWrapper(() => {
    window.open(packageJson.repository.url, '_blank');
    return 'Opening repository...';
  }),
  clear: sudoWrapper(() => {
    history.set([]);
    return '';
  }),
  email: sudoWrapper(() => {
    window.open(`mailto:${packageJson.author.email}`);
    return `Opening mailto:${packageJson.author.email}...`;
  }),
  donate: sudoWrapper(() => {
    window.open(packageJson.funding.url, '_blank');
    return 'Opening donation url...';
  }),
  weather: sudoWrapper(async (args: string[]) => {
    const city = args.join('+');
    if (!city) {
      return 'Usage: weather [city]. Example: weather Brussels';
    }
    const weather = await fetch(`https://wttr.in/${city}?ATm`);
    return weather.text();
  }),
  exit: sudoWrapper(() => {
    return 'Please close the tab to exit.';
  }),
  curl: sudoWrapper(async (args: string[]) => {
    if (args.length === 0) {
      return 'curl: no URL provided';
    }
    const url = args[0];
    try {
      const response = await fetch(url);
      const data = await response.text();
      return data;
    } catch (error) {
      return `curl: could not fetch URL ${url}. Details: ${error}`;
    }
  }),
  banner: sudoWrapper(() => `
███████╗ █████╗  ██████╗██╗  ██╗██╗  ██╗   ██████╗ ███████╗██╗   ██╗
╚══███╔╝██╔══██╗██╔════╝██║  ██║██║ ██╔╝   ██╔══██╗██╔════╝██║   ██║
  ███╔╝ ███████║██║     ███████║█████╔╝    ██║  ██║█████╗  ██║   ██║
 ███╔╝  ██╔══██║██║     ██╔══██║██╔═██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████╗██║  ██║╚██████╗██║  ██║██║  ██╗██╗██████╔╝███████╗ ╚████╔╝ v${packageJson.version}

Type 'help' to see list of available commands.
`),
};
