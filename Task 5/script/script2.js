var getDOM = (function () {
    var dom = "",
        depth = 0;

    return function (node, n) {
        for (var i = 0; i < depth; i++) {
            dom += '<span>|---</span>';
        }

        dom += '<b>' + node.nodeName.toLowerCase() + '</b>';

        if (node.id) {
            dom += '[#' + node.id + ']';
        }

        if (node.className) {
            dom += '(' + node.className + ')'
        }

        if (typeof n === 'number') {
            dom += '<span>{child #' + n + '}</span>';
        }
        
        if (node.nameContent && node.nodeName == 'LI') {
            dom += '<span class="value">[<em>' + node.nameContent + '</em>]</span>';
        }

        dom += '<br>';
        depth++;

        [].forEach.call(node.children, function (node, childNumber) {
            getDOM(node, childNumber);
        });

        depth--;
        return dom;
    };
})();

$('#visualize').html(getDOM(document));    