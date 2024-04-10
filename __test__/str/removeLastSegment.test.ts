import {removeLastSegment} from "../../src";

describe('removeLastSegment', ()=>{
    test('should return an remove Last segment',() => {
        expect(
            removeLastSegment('/foo/bar','/')
        ).toEqual('/foo');

        expect(
            removeLastSegment('foo/bar','/')
        ).toEqual('foo');

        expect(
            removeLastSegment('foo/bar/','/')
        ).toEqual('foo/bar');

    })
})