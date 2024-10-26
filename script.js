const tl = gsap.timeline();
tl.from(".p",{
    x:"-300px",
    duration:0.9
})  
tl.from(".md",{
    y:200,
    // duration:0.9,
    stagger:0.1
});

