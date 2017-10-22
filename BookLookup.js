function BookLookup(AmazonService) {
    this.AmazonService = AmazonService

    this.search = function(isbn) {
        let obj = this.AmazonService(isbn)
        return {'bookname': obj.title, 'cover': obj.image, 'isbn': obj.isbn}
    }
}

module.exports = BookLookup