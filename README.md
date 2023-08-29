# Activity discord

Custom activity discord according to what you want, please note this method is illegal, we are not responsible if a problem occurs, use it as wisely as possible !!

![Example](https://github.com/Paiiss/activity/blob/master/example.png?raw=true)

## Get Discord Tokens

Paste the code below in your discord console log

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  (req) => {
    for (const m of Object.keys(req.c)
      .map((x) => req.c[x].exports)
      .filter((x) => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log("%cDone!", "font-size: 50px");
console.log(`%cYou now have your token in the clipboard!`, "font-size: 16px");
```

Don't share your discord token because people can login only from discord token!!
(https://github.com/Discord-Oxygen/Discord-Console-hacks/)

## Installation

**Make sure you have installed nodejs!**

Download this repo using git

```bash
git clone https://github.com/Paiiss/activity.git
```

go into the activities folder

```bash
cd activity
```

Install the library by the way

```sh
npm install
```

Create an .env file or rename the example.env file to .env, fill it with:

```sh
TOKEN=YOUR_TOKEN
```

Also configure the config.json file, change it as you wish.

You are ready to activate the activity, the final step is activating the script

```sh
node index.js
```

That's all from me, use it as wisely as possible!

First and last hint, I don't intend to continue this repo, hope it's useful :')
