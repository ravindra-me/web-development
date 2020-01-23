<!doctype html>
<script src="https://en.js.cx/test/libs.js"></script>
<script src="test.js"></script>
<script>

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  function multiplyNumeric(obj) {
    for (let key in menu){
      if(typeof menu[key]=='number'){
        menu[key]*=2
      }
      return menu;
    }


  
  }
  
  multiplyNumeric(menu);
  
  alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

</script>

</html>