const fs = require('fs');

//Dosya oluşturma ve veri ekleme.
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) {
        return console.error('Dosya oluşturulurken bir hata oluştu:', err);
    }
    console.log('employees.json dosyası başarıyla oluşturuldu ve veri eklendi!');

    //Dosyayı okuma
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if(err) {
            return console.error('Dosya okunurken bir hata oluştu:', err);
        }
        console.log('Dosyadan okunan veri:', data);

        //Dosyayı güncelleme
        const updatedData = '{"name": "Employee 1 Updated Name}';
        fs.writeFile('employees.json', updatedData, 'utf8', (err) => {
            if (err) {
                return console.log('Dosya güncellenirken bir hata oluştu:', err);
            }
            console.log('employees.json dosyası başarıyla güncellendi!');

            //Dosyayı silme
            fs.unlink('employees.json', (err) => {
                if (err) {
                    return console.log('Dosya silinirken bir hata oluştu:', err);
                }
                console.log('employees.json dosyası başarıyla silindi!');
            });
        });
    });
});