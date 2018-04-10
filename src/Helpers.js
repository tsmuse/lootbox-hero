
export function rolldice(dice) {
    if (!Number.isNaN(dice)) {
        var min = Math.ceil(1);
        var max = Math.floor(dice);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return undefined;
}


