// 定义转义 HTML 字符的函数
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, function(match) {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'

        }
    })

}

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, function(match) {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'

        }

    });

}

module.exports = {
    htmlEscape,
    htmlUnEscape
}