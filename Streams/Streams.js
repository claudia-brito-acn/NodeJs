const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Encoding', 'gzip')
    FileSystem.createReadStream(path.join(__dirname, 'lorem.txt'))
    .pipe(zlib.createGzip())
    .pipe(res)
})