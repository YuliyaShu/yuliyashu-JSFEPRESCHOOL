console.log('Self check\n',
'Ваша отметка - 70 балла(ов)\n',
'Отзыв по пунктам ТЗ:\n',
'Не выполненные/не засчитанные пункты: нет\n',

'Комментарий проверяющего: Доп функционал: открытие большого изображения по клику, эффекты при наведении\n',


'Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.\n'
)

// cursor on input search after loading
function setFocus(){
    document.querySelector(".search-corners").focus();
}
setFocus();




//catching input.value
const form = document.querySelector(".search-container");
const input = document.querySelector(".search-corners");
let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=aff2286eac9bab8a0ac892b8c02202ae&tags=хаски&tag_mode=OR&media=photos&extras=url_c&per_page=300&format=json&nojsoncallback=1`;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(form);
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=aff2286eac9bab8a0ac892b8c02202ae&tags=${input.value}&tag_mode=OR&media=photos&extras=url_c&per_page=300&format=json&nojsoncallback=1`;
    document.querySelector('.wrapper').innerHTML = "";
    async function getData2() {
        const res = await fetch(url);
        const data = await res.json();
        showData(data);
    }
    getData2();
  });



//API
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}
getData();




//create images
function showData(x) {
    let countFigures = document.querySelector('.wrapper').children.length;
    for (let i = 0; countFigures < 6; i++) {
        
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const link = document.createElement('a');
        const wrapper = document.querySelector('.wrapper');
        img.classList.add('gallery-img');
        link.classList.add('img-link');
        if (x.photos.photo[i].width_c === 800 
            && x.photos.photo[i].height_c === 533) {
            img.src = `${x.photos.photo[i].url_c}`;
            img.title = 'Click for big';
            link.href = `${x.photos.photo[i].url_c}`;
        } else {
            continue;
        }
        img.alt = `image`;
        wrapper.append(figure);
        figure.append(link);
        link.append(img);
        countFigures++;
    }
}




