const http = require('http');

//Sunucuyu oluşturma
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    //Gelen URL'ye göre yönlendirme yapma.
    if (req.url === '/') {
        res.end('<h2>Index sayfasına hoş geldiniz!</h2>');
    } else if (req.url === '/about') {
        res.end('<h2>İletişim sayfasına hoş geldiniz!</h2>')
    } else if (req.url === '/contact') {
        res.end('<h2>İletişim sayfasına hoş geldiniz!</h2>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h2>404- Sayfa bulunamadı!</h2>');
    }
});

//Sunucuyu belirtilen portta başlatma
const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı: http://localhost:${port}`);
});