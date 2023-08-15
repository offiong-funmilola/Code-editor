// monaco.language.register({id : myLang});
//         let keywords= [
//             'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'goto', 'do',
//             'if', 'private', 'this', 'break', 'protected', 'throw', 'else', 'public',
//             'enum', 'return', 'catch', 'try', 'interface', 'static', 'class',
//             'finally', 'const', 'super', 'while', 'true', 'false'
//         ];

//         monaco.language.setMonaarchTokensProvider(myLang, {
//             keywords,
//             tokenizer: {
//                 root: [[/[a-z_\$][a-zA-Z0-9_\$]*/, { 
//                     cases: { 
//                         '@keywords': 'keyword',
//                         '@default': 'variable' 
//                         }
//                     }],
//                     [/".*?"/, 'string'],
//                     [/\/\//, 'comment']
//             ]
//             }
//         });

//         monaco.editor.defineTheme('myLang-theme', {
//             base: 'vs',
//             rules : [
//                 {token: 'keyword', foreground: '#FF6600', fontStyle: 'bold'},
//                 {token: 'comment', foreground: '#999999' },
//                 {token: 'string', foreground: '#009966'},
//                 {token: 'variable', foreground: '#006699'}
//             ]
//         })

//         monaco.language.registerCompletionItemProvider(myLang, {
//             provideCompletionItems:  (model, position) =>  {
//                 const suggestions = [
//                     ...keywords.map(k => {
//                         return {
//                             label: k,
//                             kind: Editor.language.completionItemKind.keywords,
//                             insertText: k
//                         }
//                     })
//                 ]
//                 return {suggestions: suggestions}
//             }
//         })

//         let err = {
//             message: 'unknown type',
//             line: 4,
//             column: 5,
//             length: 5
//         }
        
//         let markers = []
//         if (err) {
//             markers.push({
//                 startLineNumber: err.line,
//                 endLineNumber: err.line,
//                 startColumn: err.column,
//                 endColumn:  err.column + err.length,
//                 message: err.message,
//                 severity: monaco.MarkerSeverity.Error,
//             })

//         }
//         monaco.editor.setModelMarkers(editor.getModel(), 'owner', markers)
