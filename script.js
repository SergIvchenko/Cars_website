init = function(){
    var jarallax = new Jarallax();
    jarallax.addAnimation('.bg2',[{progress:'0%', top:'900px'},{progress:'33%', top:'100px'}]);
    jarallax.addAnimation('.name2',[{progress:'0%', opacity: '0'},{progress:'33%', opacity: '1'}]);
    jarallax.addAnimation('.bg3',[{progress:'33%', top:'2000px'},{progress:'66%', top:'100px'}]);
    jarallax.addAnimation('.name3',[{progress:'33%', opacity: '0'},{progress:'66%', opacity: '1'}]);
    jarallax.addAnimation('.bg4',[{progress:'66%', top:'3000px'},{progress:'100%', top:'100px'}]);
    jarallax.addAnimation('.name4',[{progress:'66%', opacity: '0'},{progress:'100%', opacity: '1'}]);
}
