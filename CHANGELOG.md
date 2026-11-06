# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [2.0.0] - 2026-11-06

### Added
- Brand-new white interface with an optional dark theme.
- Settings inside the toolbar popup, so no new tab is needed.
- Status shield showing **off**, **partially protected** and **protected** states.
- Quick tiles to toggle Names, Messages and Media from the main popup.
- Extension icons in 16, 32, 48 and 128 px.
- Telegram credit link.

### Changed
- Settings now apply instantly through `chrome.storage.onChanged` instead of reloading WhatsApp Web.
- Blur re-application is debounced for smoother performance on busy chats.
- Removed the unused `scripting` permission.

### Fixed
- Media blur was not removed after turning the media option off.
- Settings icon showed garbled characters because of a missing UTF-8 charset.

## [1.0.0]

### Added
- First release: blur names, messages and media on WhatsApp Web with hover to reveal.

[Unreleased]: https://github.com/ForhadHossain71/whatsapp-web-privacy-blur/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/ForhadHossain71/whatsapp-web-privacy-blur/releases/tag/v2.0.0
