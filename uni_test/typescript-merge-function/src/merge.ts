export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];

    let i = 0;
    let j = 0;
    let k = collection3.length - 1;

    while ((i < collection1.length || j < collection2.length) && k >= 0) {

        if (i < collection1.length && (j >= collection2.length || collection1[i] <= collection2[j]) && collection1[i] <= collection3[k]) {
            result.push(collection1[i]);
            i++;
        } else if (j < collection2.length && (i >= collection1.length || collection2[j] <= collection1[i]) && collection2[j] <= collection3[k]) {
            result.push(collection2[j]);
            j++;
        } else {
            result.push(collection3[k]);
            k--;
        }
    }

    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }

    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }

    while (k >= 0) {
        result.push(collection3[k]);
        k--;
    }

    return result; 
}
