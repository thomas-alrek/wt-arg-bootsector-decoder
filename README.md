# WT-ARG Bootsector Decoder

![Image of Codewheel](https://i.imgur.com/xif3gfW.png)

This module decodes the codewheel puzzle of [Phase2 Bootsector](http://wiki.gamedetectives.net/index.php?title=Waking_Titan#Citizen_Scientist_Emails) for the [Waking Titan ARG](http://wiki.gamedetectives.net/index.php?title=Waking_Titan).

If you have a unique code and a decryption key, you can solve it quickly using this.

Example:

```javascript
const decoder = require('wt-arg-bootsector-decoder')

let myCode = decoder('0a1b2c3', '1L 1L 2L 3R 5L 8R 13L')

// myCode === '1c5c8ae'
```

Try it out at [http://bootsector.wakingtitan.com/](http://bootsector.wakingtitan.com/)
