let books = [
    { title: 'Ejoriya', author: ' Subin Bhattarai' },
    { title: 'Rich dad poor dad', author: ' Robert Kiyosaki and Sharon Lechter ' },
    { title: 'Harry potter', author: 'J. K. Rowling' },
    { title: 'muna madan', author: 'laxmi parsad devkota' }
  ];
  
  console.log("Initial array of books:");
  console.log(books);
  
  const removedBooks = books.splice(1, 1);
  
  console.log("\nArray after removing the second book:");
  console.log(books);
  
  console.log("\nRemoved book:");
  console.log(removedBooks);
  