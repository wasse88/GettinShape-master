$('form').on('submit',(e=>{
    e.preventDefault();
    console.log($('form').serializeArray());
    
}));