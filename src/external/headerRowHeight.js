
// Copyright: 2015 AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/scrollgrid/blob/master/MIT-LICENSE.txt"
// Source: /src/external/headerRowHeight.js
Scrollgrid.prototype.headerRowHeight = function (value, silent) {
    "use strict";

    var physical = this.internal.sizes.physical,
        result;

    if (value === undefined) {
        result = physical.headerRowHeight;
    } else {
        // Set the value and redraw but return self for chaining
        physical.headerRowHeight = value;
        result = this;
        if (!silent) {
            this.refresh();
        }
    }

    return result;

};