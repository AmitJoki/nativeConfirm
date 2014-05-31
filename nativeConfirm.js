// From the founder of http://nettpals.in (Okay! No one knows it now :)
$.fn.nativeConfirm = function (options) {
    return this.click(function () {
        var bool = confirm(options.text);
        bool ? options.yes.call(this) : options.no.call(this);
    });
}
