import { default } from 'ava'

function doSomething(num_list: number[]) {
    num_list.map(element: number => element * element)
}

test('Power of 2 test', t => {
    t.is(doSomething([2, 3, 5, 6]), [4, 9, 25, 36])
})
