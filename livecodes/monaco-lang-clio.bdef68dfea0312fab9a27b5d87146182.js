var e={tokens:{keywords:["import","export","from","as","fn","await","[await]","if","else","true","false","and","or","not","type","list"],typeKeywords:["Number","String","Function","Array"],operators:[">","<",":","=","<=",">=","!=","+","-","*","/","//","|","**","%"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/fn/,{token:"keyword",next:"@function"}],[/->/,{token:"operators",next:"@chain"}],[/[a-zA-Z_$][\w$]*/i,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/"([^'\\]|\\.)*$/,"string.invalid"],[/'/,{token:"string.quote",bracket:"@open",next:"@stringSingle"}]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],stringSingle:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/--.*$/,"comment"]],function:[[/[a-zA-Z0-9_]+/,{token:"variable",next:"@pop"}]],chain:[[/\*/,"operators"],[/\[?await\]?/,"keyword"],[/[a-zA-Z]+/,{token:"variable",next:"@pop"}]]}}};export{e as default};
//# sourceMappingURL=monaco-lang-clio.js.map