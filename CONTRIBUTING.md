# Contributing to WA Privacy Pro

Thanks for taking the time to contribute! Every bug report, idea and pull request makes the extension better.

## Ways to help

- 🐛 **Report a bug**: [open a bug report](https://github.com/ForhadHossain71/whatsapp-web-privacy-blur/issues/new?template=bug_report.yml).
- 💡 **Suggest a feature**: [open a feature request](https://github.com/ForhadHossain71/whatsapp-web-privacy-blur/issues/new?template=feature_request.yml).
- 🔧 **Fix something**: pick an open issue and send a pull request.
- ⭐ **Star the repo** so more people can find it.

## Development setup

No build step is needed. The extension is plain HTML, CSS and JavaScript.

1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/whatsapp-web-privacy-blur.git
   ```
2. Open `chrome://extensions`, enable **Developer mode**, click **Load unpacked**, and select the cloned folder.
3. Make your changes.
4. Click **↻ reload** on the extension card and refresh `web.whatsapp.com` to test.

## Guidelines

- **Keep it lightweight.** No frameworks, bundlers or third-party libraries.
- **Privacy first.** Never add analytics, remote code, or network requests.
- **Request the fewest permissions possible.** Explain any new permission in your pull request.
- **Match the design system.** Use the color tokens in `ui.css` so both light and dark themes keep working.
- **Test both themes** and the popup's main and settings views.
- **WhatsApp selectors change often.** When updating them in `content.js`, prefer stable attributes (like `title`, `role`, `data-*`) over generated class names.

## Commit messages

Use short, descriptive messages in the imperative mood, ideally following [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add keyboard shortcut to toggle blur
fix: blur group participant names in chat header
docs: update installation steps for Edge
```

## Pull request checklist

- [ ] Tested in Chrome (and Edge if possible)
- [ ] Works in both light and dark themes
- [ ] No new permissions, or they are explained
- [ ] `CHANGELOG.md` updated under **Unreleased**
- [ ] Screenshots attached for any UI change

## Code of conduct

Be kind, respectful and constructive. Harassment or personal attacks of any kind are not tolerated.
