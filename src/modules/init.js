export default () => {
    if (localStorage.getItem("__KEYCAP") == null) {
        localStorage.setItem("__KEYCAP", JSON.stringify([]));
    }
}