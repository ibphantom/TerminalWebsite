// src/stores/theme.ts
import { writable } from 'svelte/store';
import themes from '../../themes.json';
import type { Theme } from '../interfaces/theme';

const defaultColorscheme: Theme = themes.find((t) => t.name === 'GruvboxDark')!;

export const theme = writable<Theme>(
  JSON.parse(
    localStorage.getItem('colorscheme') || JSON.stringify(defaultColorscheme),
  ),
);

export const username = writable<string>(''); // Add this line to export the username store

theme.subscribe((value) => {
  localStorage.setItem('colorscheme', JSON.stringify(value));
});
