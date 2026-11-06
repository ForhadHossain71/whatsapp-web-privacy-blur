(() => {
    const root = document.documentElement;
    let theme = "light";
    try { theme = localStorage.getItem("theme") || "light"; } catch {}
    root.dataset.theme = theme;

    document.querySelectorAll(".themeToggle").forEach(btn => {
        btn.addEventListener("click", () => {
            theme = theme === "dark" ? "light" : "dark";
            root.dataset.theme = theme;
            try { localStorage.setItem("theme", theme); } catch {}
        });
    });
})();
