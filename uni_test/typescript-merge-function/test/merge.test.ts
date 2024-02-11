// test/merge.test.ts

import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three sorted arrays', () => {
        const collection1 = [1,2];
        const collection2 = [0];
        const collection3 = [7,3,1];

        const result = merge(collection1, collection2, collection3);

        console.log(result);
    });
});

