  //  This function is used to provide display value in textfield with #txtfld :

  function show(val) {
      document.getElementById("txtfld").value += val;
  }

  //  This function is used to provide result value  by using eval() in textfield with #txtfld :

  function sol() {
      let x = document.getElementById("txtfld").value
      let y = eval(x)
      document.getElementById("txtfld").value = y
  }

  //  This function is used to clear textfield #txtfld  :

  function clr() {
      document.getElementById("txtfld").value = ""
  }