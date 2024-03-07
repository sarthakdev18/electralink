const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.header', {origin: "top", delay: 200})
sr.reveal('.about', {origin: "top", interval: 200, delay: 400})
sr.reveal('.info', {origin: "top", interval: 200, delay: 400})
sr.reveal('.info_data', {origin: "right", interval: 200, delay: 400})
sr.reveal('.counter_container', {origin: "top", interval: 200, delay: 400})
sr.reveal('.banner_img, .banner_title', {origin: "top", interval: 200, delay: 400})
sr.reveal('.banner_icons', {origin: "left", interval: 200, delay: 400})
sr.reveal('.subtitle, .banner_info', {origin: "right", interval: 200, delay: 500})