export class Utils {
    convertFToC = f => Math.round(((f - 32) * 5/9) * 10) / 10;
}

export const utils = new Utils();