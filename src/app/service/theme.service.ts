import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeKey = 'theme';

  constructor() {
    if (this.isBrowser()) {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }
  }

  setTheme(theme: string) {
    if (this.isBrowser()) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    localStorage.setItem(this.themeKey, theme);
  }
  }
  toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
    this.setTheme(currentTheme);
  }

  getCurrentTheme(): string {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}