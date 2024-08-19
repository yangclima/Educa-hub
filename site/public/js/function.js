function getLayoutDimensions(){
    const header = document.getElementById("header");
    const aside = document.getElementById("aside");

    const dimensions = {
        headerHeight: header.offsetHeight,
        headerWidth: header.offsetWidth,
        asideHeight: header.offsetHeight,
        asideWidth: aside.offsetWidth,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    }

    return dimensions;
}

function setMainPosition() {
    const mainSection = document.getElementById("main").style;
    const layoutDimensions = getLayoutDimensions();

    mainSection.top = `${layoutDimensions.headerHeight}px`;
    mainSection.left = `${layoutDimensions.asideWidth}px`;
    mainSection.width = `${layoutDimensions.windowWidth - layoutDimensions.asideWidth - 20}px`;
    mainSection.height = `${layoutDimensions.windowHeight - layoutDimensions.headerHeight - 20}px`;
}

function setActive(){
    const sections = window.sections;
    const active = window.active;

    let section, sectionLink;

    for(let property in sections){
        sectionLink = document.getElementById(sections[property]);
        section = document.getElementById(property);
        
        if(sections[property] == active){
            sectionLink.classList.add("active");
            section.style.display = "unset";
            continue;
        }

        sectionLink.classList.remove("active");
        section.style.display = "none";
    }
}

function switchSection(){
    const sections = window.sections;
    
    for(let property in sections){

        document.getElementById(sections[property]).addEventListener("click", function (){
            window.active = sections[property];
            setActive();
        });
    }
}

setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 2000);

window.addEventListener('load', () => {
    setMainPosition();
    
    if(window.sections && window.active){
        setActive();
        switchSection();
    }

    window.addEventListener('resize', setMainPosition);
});


