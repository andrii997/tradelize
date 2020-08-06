

// document.querySelector('body').onclick = function(e){
//     // remove(e);
// }
document.querySelectorAll('#menu .block-open').forEach((itm)=>{
    itm.onclick = function(e){
        if(!e.target.classList.contains('block-open')){
            return false;
        }
        
        const nav = document.getElementById('nav');
        const menuItem = document.querySelectorAll('#menu .block-open');
        let remove = (e) => {
            nav.classList.remove('active');
            
            menuItem.forEach((itm)=>{
                itm.classList.remove('active');
                if(itm.querySelector('.block-menu')){
                    itm.querySelector('.block-menu').classList.add('hidden');
                }
            });

        }
        if(
            this.classList.contains('active') ||
            this.classList.contains('none-active')
        ){
            remove();
            
        } else{
            remove();
            nav.classList.add('active');
            this.classList.toggle('active');
            const menuBlock = this.querySelector('.block-menu');
            if(menuBlock){
                this.querySelector('.block-menu').classList.remove('hidden');
            }
        }
        return false;
    }
})

document.querySelector('#burger .menu-open').onclick = function(){
    this.classList.add('hidden');
    console.log( document.querySelector('#burger .menu-close') );
    document.querySelector('#burger .menu-close').style = "display: block;";

    document.querySelector('#nav').classList.add('active-mobile');
    document.querySelector('#nav .wrapp-container').style = "display: flex;";
    document.querySelector('body').classList.add('mobile-hidden');
}

document.querySelector('#burger .menu-close').onclick = function(){
    this.style = "display: none;";
    document.querySelector('#burger .menu-open').classList.remove('hidden');
    document.querySelector('#nav').classList.remove('active-mobile');
    document.querySelector('#nav .wrapp-container').style = "display: ;";
    document.querySelector('body').classList.remove('mobile-hidden');
    document.getElementById('nav').classList.remove('active');

    document.querySelectorAll('#menu .block-open').forEach((itm)=>{
        itm.classList.remove('active');
        if(itm.querySelector('.block-menu')){
            itm.querySelector('.block-menu').classList.add('hidden');
        }
    });

}