nativeConfirm
=============

When all you need is a small confirmation with no UI gimmicks

Requires jQuery as it is a jQuery plugin

Attach it to any element with `options` which has a `yes`, `no` as function callbacks and `text` which contains the confirm text.

Usage:
```
$('a').nativeConfirm({
  yes: function(){
    alert("Howdy!");
  }
  no: function(){
    alert("Oh no!");
  }
  text: 'Are you sure you want to delete this?'
});
```

Also, check out my *only* website http://nettpals.in 
