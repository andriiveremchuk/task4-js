/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */

const fetchApiModule = {
  init: () => {
    const url = 'http://localhost:3000/api/blogs';
    const latestBlogImage = document.querySelectorAll('.info__box__storage__container__image');
    const calendarDate = document.querySelectorAll('.article__block__number--small');
    const calendarDay = document.querySelectorAll('.article__block__text--small');
    const latestBlogTitle = document.querySelectorAll('.latest-blog__title');
    const latestBlogText = document.querySelectorAll('.latest-blog__text');
    const latestBlogSeen = document.querySelectorAll('.latest-blog__seen');
    const latestBlogComments = document.querySelectorAll('.latest-blog__comments');
    const blogsImage = document.querySelectorAll('.block__showcase__container__image');
    const blogsTitle = document.querySelectorAll('.info__description__block__title--small');
    const blogsDate = document.querySelectorAll('.blogs__date');
    const numOfElements = latestBlogImage.length;
    const dateFormat = {
      day: {
        day: '2-digit',
      },
      month: {
        month: 'short',
      },
      full: {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      },
    };

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < numOfElements; i++) {
            const newDate = new Date(data.blogs[i].published);
            latestBlogTitle[i].innerHTML = data.blogs[i].title;
            latestBlogText[i].innerHTML = data.blogs[i].description;
            latestBlogImage[i].src = data.blogs[i].previewImg;
            latestBlogSeen[i].innerHTML = data.blogs[i].watched;
            latestBlogComments[i].innerHTML = data.blogs[i].comments;
            calendarDate[i].innerHTML = newDate.toLocaleDateString('en-GB', dateFormat.day);
            calendarDay[i].innerHTML = newDate.toLocaleDateString('en-GB', dateFormat.month);
            blogsDate[i].innerHTML = newDate.toLocaleDateString('en-GB', dateFormat.full);
            blogsImage[i].src = data.blogs[i + numOfElements].previewImg;
            blogsTitle[i].innerHTML = data.blogs[i + numOfElements].title;
            latestBlogImage[i].style.height = '150px';
          }
        });
  },
};

export default fetchApiModule;
