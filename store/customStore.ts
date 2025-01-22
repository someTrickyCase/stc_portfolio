export function readCustomStore() {
    const navDirectionJSON = sessionStorage.getItem("navDirection");
    return navDirectionJSON ? JSON.parse(navDirectionJSON) : "";
}

export function writeCustomStore(value: string) {
    if (value === "") sessionStorage.setItem("navDirection", JSON.stringify(""));

    sessionStorage.setItem("navDirection", JSON.stringify(value));
    setTimeout(() => {
        sessionStorage.setItem("navDirection", JSON.stringify(""));
    }, 800);
}
