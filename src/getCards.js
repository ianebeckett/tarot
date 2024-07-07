function getCards() {
    const fs = require("fs");
    const [error, paths] = fs.readdir("/cards/");
    if (error) {
        console.error(error);
        return;
    }

    return paths;
}

export default getCards;
