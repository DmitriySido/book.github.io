window.addEventListener('DOMContentLoaded', function(){
  let video = document.querySelector('.video__wrapper')

  video.addEventListener('click', function(){
    if(video.classList.contains('ready')){
      return
    }
    video.classList.add('ready')

    video.insertAdjacentHTML('afterbegin', '<iframe class="about-book__video" src="https://www.youtube.com/embed/BmEH0or3DT0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
  })
  })