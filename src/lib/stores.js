import { writable } from 'svelte/store';

export const navStuck = writable(false)
export const headerLight = writable(false)
export const navHeight = writable(0)

export const menuShow = writable(false)