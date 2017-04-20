describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort( []) ).toEqual( [] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles an array with one item', function() {
    expect(bubbleSort( [1] )).toEqual( [1] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles an array with multiple items', function() {
    expect(bubbleSort( [2, 7, 5, 3, 1] )).toEqual( [1, 2, 3, 5, 7] );
    expect(swap.calls.count()).toEqual(7);
  })

});
