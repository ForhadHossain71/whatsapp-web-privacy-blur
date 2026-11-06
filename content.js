function applyFilters() {
    chrome.storage.sync.get(["allBlur", "blurNames", "blurMessages", "blurMedia"], (s) => {
        const isAll = s.allBlur;

        document.querySelectorAll(".blur-item, .blur-media").forEach(el => {
            el.classList.remove("blur-item", "blur-media");
        });

        const names = document.querySelectorAll("span[title], div._ak8q, header span");
        const msgs = document.querySelectorAll("div._ak8j, span.selectable-text, .copyable-text");
        const media = document.querySelectorAll("img, video, canvas, [role='img'], [style*='background-image']");

        if (isAll || s.blurNames) names.forEach(el => el.classList.add("blur-item"));
        if (isAll || s.blurMessages) msgs.forEach(el => el.classList.add("blur-item"));
        if (isAll || s.blurMedia) media.forEach(el => el.classList.add("blur-media"));
    });
}

let debounceTimer;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyFilters, 200);
});
observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.onChanged.addListener(() => applyFilters());

applyFilters();