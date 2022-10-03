export function saveToLocal(theme: boolean) {
    localStorage.setItem('theme', JSON.stringify(theme));
}