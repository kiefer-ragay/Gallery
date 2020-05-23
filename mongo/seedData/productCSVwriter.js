const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'images.csv'),
  header: [
    { id: 'image_url', title: 'image_url' },
    { id: 'views', title: 'views' },
    { id: 'height', title: 'height' },
    { id: 'width', title: 'width' },
    { id: 'date_added', title: 'date_added'}
  ]
});