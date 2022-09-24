export function saveToLocalStorage(theme: boolean): void {
    localStorage.setItem('isDark', JSON.stringify(theme));
}