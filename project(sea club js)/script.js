let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontbutton = document.querySelector('.font-button-serif'); 
let sansSeriffontButton = document.querySelector('.font-button-sans-serif');
let pageDark  = document.querySelector('.page.dark');
let blogArticles = document.querySelectorAll('.blog-article.short');
darkThemeButton.onclick = function(){
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
};
lightThemeButton.onclick = function(){
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};
serifFontbutton.onclick = function(){
    document.body.classList.add('serif');
    serifFontbutton.classList.add('active');
    sansSeriffontButton.classList.remove('active');
};
sansSeriffontButton.onclick = function(){
    document.body.classList.remove('serif');
    sansSeriffontButton.classList.add('active');
    serifFontbutton.classList.remove('active');
  };
  for(let blogArticle of blogArticles){
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function(){
        blogArticle.classList.remove('short');
    };
  };
  let cardList = document.querySelector('.card-view-button-list'); 
  let cardGrid = document.querySelector('.card-view-button-grid');
  let cardsList = document.querySelector('.cards');
    cardGrid.onclick = function(){
        cardsList.classList.remove('list');
        cardList.classList.remove('active');
        cardGrid.classList.add('active');
};
    cardList.onclick = function(){
        cardsList.classList.add('list');
        cardList.classList.add('active');
        cardGrid.classList.remove('active');
  };
  let activePhoto = document.querySelector('.active-photo');
  let previewLists = document.querySelectorAll('.preview-list a');

  for(let activeImage of previewLists){
    activeImage.onclick = function (evt){
        evt.preventDefault();
        activePhoto.src = activeImage.href;
        let currentActive = document.querySelector('.active-item');
  currentActive.classList.remove('active');
  activeImage.classList.add('active');
    }
  }


  function showFirstMessage(text){
alert(text);

  }
  showFirstMessage("hello world");