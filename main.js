" use strict";
{
  let result = document.getElementById("result");
  function edit(a) {
    result.value = result.value + a.value;
  }

	function calc() {
		result.value = new Function ("return " + result.value)();
	}
}
