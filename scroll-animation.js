const allSec = document.querySelectorAll('section');
allSec.forEach(ele =>{
    ele.classList.add("hiddenClass");
})

const removeTras = (entries, observer)=>{
    entries[0].target.classList.remove('hiddenClass');
    observer.unobserve(entries[0].target)
}

const navHeight = document.querySelector("nav").getBoundingClientRect().height;
const sectionObs = new IntersectionObserver(removeTras, {threshold :0.25, root:null, rootMargin:`-${navHeight}px`}, );

allSec.forEach(ele =>{
    sectionObs.observe(ele);
})


const stickyNav = (entries, observer)=>{
    console.log(entries);
    if(!entries[0].isIntersecting)
        document.getElementsByClassName('navbar')[0].classList.add('nav-sticky');
    else
    document.getElementsByClassName('navbar')[0].classList.remove('nav-sticky')
}

const navObs = new IntersectionObserver(stickyNav, {threshold :0, root:null, rootMargin:`-${navHeight}px`});
navObs.observe(allSec[0]);