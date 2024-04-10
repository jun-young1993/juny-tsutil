import {removeFirstSegment} from "../../src";

describe('removeFirstSegment', ()=>{
    test('should return an remove first segment',() => {
        expect(
            removeFirstSegment('/foo/bar','/')
        ).toEqual('foo/bar');

        expect(
            removeFirstSegment('foo/bar','/')
        ).toEqual('bar');

    })
})