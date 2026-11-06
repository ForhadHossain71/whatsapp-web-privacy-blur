const KEYS = ["allBlur", "blurNames", "blurMessages", "blurMedia"];
const SUB = KEYS.slice(1);
const $ = (id) => document.getElementById(id);

let state = {};

function render() {
    const on = !!state.allBlur;
    document.body.classList.toggle("is-on", on);
    KEYS.forEach(k => { $(k).checked = !!state[k]; });
    SUB.forEach(k => $(`row-${k}`).classList.toggle("disabled", on));
}

chrome.storage.sync.get(KEYS, (s) => {
    state = s;
    render();
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync") return;
    for (const [k, { newValue }] of Object.entries(changes)) state[k] = newValue;
    render();
});

KEYS.forEach(k => {
    $(k).addEventListener("change", (e) => chrome.storage.sync.set({ [k]: e.target.checked }));
});
