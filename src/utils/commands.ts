import packageJson from '../../package.json';
import themes from '../../themes.json';
import { history } from '../stores/history';
import { theme } from '../stores/theme';

const hostname = window.location.hostname;
let isAuthenticated = false;

export const commands: Record<string, (args: string[]) => Promise<string> | string> = {
  help: () => 'Available commands: ' + Object.keys(commands).join(', '),
  hostname: () => isAuthenticated ? hostname : 'Authentication required',
  whoami: () => isAuthenticated ? 'guest' : 'Authentication required',
  date: () => isAuthenticated ? new Date().toLocaleString() : 'Authentication required',
  vi: () => isAuthenticated ? `why use vi? try 'emacs'` : 'Authentication required',
  vim: () => isAuthenticated ? `why use vim? try 'emacs'` : 'Authentication required',
  emacs: () => isAuthenticated ? `why use emacs? try 'vim'` : 'Authentication required',
  echo: (args: string[]) => isAuthenticated ? args.join(' ') : 'Authentication required',
  sudo: async (args: string[]) => {
    // Simulate password prompt
    const enteredPassword = prompt('Enter your password:');

    // Replace the condition with your actual password validation logic
    if (enteredPassword === 'DoubleDown!!') {
        isAuthenticated = true;
        // Change whoami from guest to sudo
        commands['whoami'] = () => isAuthenticated ? 'sudo' : 'Authentication required';
        return `Authentication successful. You can now run '${args.join(' ')}' as root.`;
    } else {
        isAuthenticated = false;
        return 'Authentication failed. Permission denied.';
    }
},

  theme: (args: string[]) => {
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
  },

  repo: () => {
    window.open(packageJson.repository.url, '_blank');

    return 'Opening repository...';
  },
  clear: () => {
    history.set([]);

    return '';
  },
  email: () => {
    window.open(`mailto:${packageJson.author.email}`);

    return `Opening mailto:${packageJson.author.email}...`;
  },
  donate: () => {
    window.open(packageJson.funding.url, '_blank');

    return 'Opening donation url...';
  },
  weather: async (args: string[]) => {
    const city = args.join('+');

    if (!city) {
      return 'Usage: weather [city]. Example: weather Chicago';
    }

    const weather = await fetch(`https://wttr.in/${city}?ATm`);

    return weather.text();
  },
  exit: () => {
    return 'Please close the tab to exit.';
  },
  curl: async (args: string[]) => {
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
  },
  banner: () => `
███████╗ █████╗  ██████╗██╗  ██╗██╗  ██╗   ██████╗ ███████╗██╗   ██╗
╚══███╔╝██╔══██╗██╔════╝██║  ██║██║ ██╔╝   ██╔══██╗██╔════╝██║   ██║
  ███╔╝ ███████║██║     ███████║█████╔╝    ██║  ██║█████╗  ██║   ██║
 ███╔╝  ██╔══██║██║     ██╔══██║██╔═██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████╗██║  ██║╚██████╗██║  ██║██║  ██╗██╗██████╔╝███████╗ ╚████╔╝ v${packageJson.version}

Type 'help' to see list of available commands.
`,
};
