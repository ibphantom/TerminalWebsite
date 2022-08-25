import { formatDistanceToNow } from 'date-fns';
import packageJson from '../../../package.json';
import themes from '../../../themes.json';

const macos = `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.        
`;

const windows = `
                                ..,
                    ....,,:;+ccllll
      ...,,+:;  cllllllllllllllllll
,cclllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
                                      
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`;

const linux = `

            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`           
      -+ssssssssssssssssssyyssss+-         
    .ossssssssssssssssssdMMMNysssso.       
   /ssssssssssshdmmNNmmyNMMMMhssssss/      
  +ssssssssshmydMMMMMMMNddddyssssssss+     
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    
  +sssssssssdmydMMMMMMMMddddyssssssss+     
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`;

const fedora = `

            .',;::::;,'.
         .';:cccccccccccc:;,.
      .;cccccccccccccccccccccc;.
    .:cccccccccccccccccccccccccc:.
  .;ccccccccccccc;${c2}.:dddl:.${c1};ccccccc;.
 .:ccccccccccccc;${c2}OWMKOOXMWd${c1};ccccccc:.
.:ccccccccccccc;${c2}KMMc${c1};cc;${c2}xMMc${c1};ccccccc:.
,cccccccccccccc;${c2}MMM.${c1};cc;${c2};WW:${c1};cccccccc,
:cccccccccccccc;${c2}MMM.${c1};cccccccccccccccc:
:ccccccc;${c2}oxOOOo${c1};${c2}MMM0OOk.${c1};cccccccccccc:
cccccc;${c2}0MMKxdd:${c1};${c2}MMMkddc.${c1};cccccccccccc;
ccccc;${c2}XM0'${c1};cccc;${c2}MMM.${c1};cccccccccccccccc'
ccccc;${c2}MMo${c1};ccccc;${c2}MMW.${c1};ccccccccccccccc;
ccccc;${c2}0MNc.${c1}ccc${c2}.xMMd${c1};ccccccccccccccc;
cccccc;${c2}dNMWXXXWM0:${c1};cccccccccccccc:,
cccccccc;${c2}.:odl:.${c1};cccccccccccccc:,.
:cccccccccccccccccccccccccccc:'.
.:cccccccccccccccccccccc:;,..
  '::cccccccccccccc::;,.
`;

const getPlatform = (): 'Fedora' | 'Unknown' | 'Windows' | 'MacOS' | 'Linux' => {
  let os: 'Unknown' | 'Fedora' | 'Windows' | 'MacOS' | 'Linux' = 'Unknown';

  if (navigator.userAgent.indexOf('Win') != -1) {
    os = 'Windows';
  }

  if (navigator.userAgent.indexOf('Mac') != -1) {
    os = 'MacOS';
  }
  
  if (navigator.userAgent.indexOf('Fedora') != -1) {
    os = 'Fedora';

  if (navigator.userAgent.indexOf('Linux') != -1) {
    os = 'Linux';
  }

  return os;
};

const getMainColor = () => {
  const platform = getPlatform();
  const themeName = localStorage.getItem('theme');
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName);

  switch (platform) {
    case 'MacOS':
      return theme.cyan;
    case 'Windows':
      return theme.blue;
    case 'Linux':
      return theme.red;
    case 'Fedora':
       return theme.blue;
  }
};

const getArt = () => {
  const platform = getPlatform();
  const mainColor = getMainColor();

  switch (platform) {
    case 'MacOS':
      return `<p style="color: ${mainColor}">${macos}</p>`;
    case 'Windows':
      return `<p style="color: ${mainColor}">${windows}</p>`;
    case 'Linux':
      return `<p style="color: ${mainColor}">${linux}</p>`;
    case 'Fedora':
      return `<p style="color: ${mainColor}">${Fedora}</p>`;
  }
};

const getInfo = () => {
  const os = getPlatform();
  const visitedAt = new Date(
    localStorage.getItem('visitedAt') || new Date().toString(),
  );
  const hostname = window.location.hostname;
  const theme = localStorage.getItem('theme');
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;
  const packages = Object.keys(packageJson.dependencies);
  const devPackages = Object.keys(packageJson.devDependencies);
  const mainColor = getMainColor();

  let message = '';

  message += `<span style="color: ${mainColor}">Host</span>: ${hostname}\n`;
  message += `<span style="color: ${mainColor}">OS</span>: ${os}\n`;
  message += `<span style="color: ${mainColor}">Packages</span>: ${
    packages.length + devPackages.length
  } (npm)\n`;
  message += `<span style="color: ${mainColor}">Resolution</span>: ${resolution}\n`;
  message += `<span style="color: ${mainColor}">Shell</span>: 5.15.46-Unraid\n`;
  message += `<span style="color: ${mainColor}">Theme</span>: ${theme}\n`;
  message += `<span style="color: ${mainColor}">License</span>: ${packageJson.license}\n`;
  message += `<span style="color: ${mainColor}">Version</span>: ${packageJson.version}\n`;
  message += `<span style="color: ${mainColor}">Repo</span>: <a href="${packageJson.repository.url}" target="_blank">${packageJson.repository.url}</a>\n`;
  message += `<span style="color: ${mainColor}">Uptime</span>: ${formatDistanceToNow(
    visitedAt,
  )}\n`;
  message += `<span style="color: ${mainColor}">Author</span>: ${packageJson.author.name} (${packageJson.author.email})\n`;
  message += `<span style="color: ${mainColor}">Donate</span>: <a href="${packageJson.funding.url}" target="_blank">${packageJson.funding.type}</a>\n`;

  return message;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  const art = getArt();
  const info = getInfo();

  return `
  <table>
    <tr>
      <td>${art}</td>
      <td>${info}</td>
    <tr>
  </table>
  `;
};
