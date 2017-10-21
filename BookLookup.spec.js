const BookShelfApp = require('./BookLookup.js')

describe('BookLookup App', function() {
    it('Search function with 001925', function() {
        const returnObj = {
            title: 'reborn',
            image: '001925.png',
            isbn: '001925'
        }
        
        let isbn = '001925'
        
        const mockFn = jest.fn(isbn)
            .mockReturnValue(returnObj)

        let app = new BookShelfApp(mockFn)
        let result = app.search(isbn)

        expect(result).toHaveProperty('bookname')
        expect(result).toHaveProperty('cover')
        expect(result).toHaveProperty('isbn')

        expect(result.bookname).toBe('reborn')
        expect(result.cover).toBe('001925.png')
        expect(result.isbn).toBe('001925')
        
        expect(mockFn).toHaveBeenCalled()
        expect(mockFn).toHaveBeenCalledWith(isbn)
    })
})