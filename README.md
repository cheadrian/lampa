# Lampa

**Auto-translated README.md**

Update: Partially fixed translation for README.md and Lampa manually.

The application is completely free and uses public links to view information about movies, new releases, popular movies, etc. All available information is used solely for educational purposes, the application does not use its own servers to distribute information.

Lamp sources are available here: <https://github.com/yumata/lampa-source>

## Devices

* LG WebOS
* Samsung Tizen
* MSX

## Installation for MSX

For now, manual installation, you need your own hosting or local web server.

1. Immediately click on the (Github) green (blue) button (Code) and select (Download ZIP) then upload the files to the hosting or web server.
2. Open file `msx/start.json` and replace the content of `{domain}` to your domain or IP
3. Open MSX and install Lampa using your domain or IP

## Web Demo

There are two links which you can use to try this Lampa version using web browser or MSX.

[Heroku](https://lampa-en.herokuapp.com/) - Media Station X: lampa-en.herokuapp.com

## Pack for WebOS

Added **appinfo.json** for WebOS. Use to get IPK:

    ares-package -n .

Removed any additional folder not used for WebOS app, like **.git**, **msx** before you pack, in order to make it slimmer. Open original .ipk from [Lampa releases](https://github.com/yumata/lampa/releases) page with 7-zip and take a look.

Installation: using [ares-install](https://www.webosose.org/docs/tools/sdk/cli/cli-user-guide/#ares-install) or [Webos Dev Manager](https://github.com/webosbrew/dev-manager-desktop/releases).

You might want to [root your WebOS / LG TV](https://rootmy.tv/) before. More details [here](https://forum.xda-developers.com/t/rootmy-tv-v2-0-released.4232223/).

## Translate

You might want to manually fix translation as quality isn't nearly great but understandable enough.

Also, there will be some unfixed bugs, but should be usable overall.

### Using Visual Studio Code install

Extensions:

* Native-ASCII Converter
* Vscode Google Translate

Alternative extension:

* Google Translate
(activate Replace in extension settings)
* CTRL + SHIFT + P -> Translate

### For app.min.js

Open in VS Code:

    CTRL + SHIFT + P -> Convert Ascii to Native
    CTRL + F -> Use Regular Expression
    CTRL + F -> (?=[а-яА-ЯёЁ]*)(?=[а-яА-ЯёЁ])([\wа-яА-ЯёЁ]+){10}
    CLICK INSIDE FILE
    CTRL + F2
    CTRL + SHIFT + P -> Translate Selection
    CTRL + F -> (?=[а-яА-ЯёЁ]*)(?=[а-яА-ЯёЁ])([\wа-яА-ЯёЁ]+){8}
    CLICK INSIDE FILE
    CTRL + F2
    CTRL + SHIFT + P -> Translate Selection
    Repeat with {6},{4},{2} and wtihout {} at the end.

Fix "It's", "Author's", etc.

    CTRL + F -> (?<=[a-z])'s
    REPLACE ALL -> \'s

Change **tmdb_lang** from 'ru' to 'en'.
Find **keyboard** and replace 'default' to 'ru' then 'en' to 'default'. 

### Other files

    msx/start.json -> replace msx/lang/ru.json to msx/lang/en.json
    Copy msx/lang/ru.json -> msx/lang/en.json
    Translate en.json using VS Code 
    Select strings with ALT
    CTRL + SHIFT + P -> Translate

Translate index.html like so.
