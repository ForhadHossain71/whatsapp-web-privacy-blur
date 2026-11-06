const KEYS = ["allBlur", "blurNames", "blurMessages", "blurMedia"];
const SUB = KEYS.slice(1);
const $ = (id) => document.getElementById(id);

let state = {};

function render() {
    const on = !!state.allBlur;
    const anyOn = on || SUB.some(k => state[k]);

    document.body.classList.toggle("is-on", on);
    $("hero").dataset.state = on ? "on" : anyOn ? "partial" : "off";
    $("btnText").textContent = on ? "Disable Blur" : "Enable Blur";
    $("statusTitle").textContent = on ? "You're protected" : anyOn ? "Partially protected" : "Protection off";
    $("statusSub").textContent = on ? "Hover any item to peek" : anyOn ? "Some items are blurred" : "Your chats are visible";
    $("allBlur").checked = on;

    SUB.forEach(k => {
        const active = on || !!state[k];
        const chip = $(`chip-${k}`);
        chip.classList.toggle("active", active);
        chip.disabled = on;
        chip.querySelector(".chip-state").textContent = active ? "On" : "Off";
        $(k).checked = !!state[k];
        $(`row-${k}`).classList.toggle("disabled", on);
    });
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

$("masterToggle").addEventListener("click", () => {
    chrome.storage.sync.set({ allBlur: !state.allBlur });
});

SUB.forEach(k => {
    $(`chip-${k}`).addEventListener("click", () => chrome.storage.sync.set({ [k]: !state[k] }));
});

KEYS.forEach(k => {
    $(k).addEventListener("change", (e) => chrome.storage.sync.set({ [k]: e.target.checked }));
});

function showView(id) {
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
}

$("openSettings").addEventListener("click", () => showView("settingsView"));
$("backBtn").addEventListener("click", () => showView("mainView"));
