$(function(){
    // search section start
        
    $('.search_show_btn').on('click', ()=>{
        $('#search').addClass('show');
    });
    $('.search_hide_btn').on('click', ()=>{
        $('#search').removeClass('show');
    });
    // card section start
    $('.card_show_btn').on('click', ()=>{
        $('#card').addClass('show');
    });
    $('.card_hide_btn').on('click', ()=>{
        $('#card').removeClass('show');
    });
    // pop up section
    $('.pop_up_hide_btn').on('click',()=>{
        $('#pop_up').addClass('hide');
    })
})