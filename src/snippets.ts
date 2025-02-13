import * as vscode from "vscode";

export function xpandShowSnippets(): vscode.CompletionItem[] {
    let completionItems = [];

    const define = new vscode.CompletionItem('«DEFINE', vscode.CompletionItemKind.Keyword);
    define.detail = 'Insert DEFINE block.';
    define.insertText = new vscode.SnippetString('«DEFINE $1 FOR $2»\n$0\n«ENDDEFINE»')
    completionItems.push(define);

    const file = new vscode.CompletionItem('«FILE', vscode.CompletionItemKind.Keyword);
    file.detail = 'Insert FILE block.';
    file.insertText = new vscode.SnippetString('«FILE $1»\n$0\n«ENDFILE»')
    completionItems.push(file);

    const if_endif = new vscode.CompletionItem('«IF', vscode.CompletionItemKind.Keyword);
    if_endif.detail = 'Insert IF/ENDIF block.';
    if_endif.insertText = new vscode.SnippetString('«IF $1»\n$0\n«ENDIF»')
    completionItems.push(if_endif);

    const else_keyword = new vscode.CompletionItem('«ELSE', vscode.CompletionItemKind.Keyword);
    else_keyword.detail = 'Insert ELSE block.';
    else_keyword.insertText = new vscode.SnippetString('«ELSE»\n$0')
    completionItems.push(else_keyword);

    const elseif = new vscode.CompletionItem('«ELSEIF', vscode.CompletionItemKind.Keyword);
    elseif.detail = 'Insert ELSEIF block.';
    elseif.insertText = new vscode.SnippetString('«ELSEIF»\n$0')
    completionItems.push(elseif);

    const foreach_endforeach = new vscode.CompletionItem('«FOREACH', vscode.CompletionItemKind.Keyword);
    foreach_endforeach.detail = 'Insert FOREACH block.';
    foreach_endforeach.insertText = new vscode.SnippetString('«FOREACH $1 AS $2»\n$0\n«ENDFOREACH»')
    completionItems.push(foreach_endforeach);

    const expand = new vscode.CompletionItem('«EXPAND', vscode.CompletionItemKind.Keyword);
    expand.detail = 'Insert EXPAND FOR block.';
    expand.insertText = new vscode.SnippetString('«EXPAND $1 FOR $0»')
    completionItems.push(expand);

    const let_keyword = new vscode.CompletionItem('«LET', vscode.CompletionItemKind.Keyword);
    let_keyword.detail = 'Insert LET AS block.';
    let_keyword.insertText = new vscode.SnippetString('«LET $1 AS $0»')
    completionItems.push(let_keyword);

    const error_keyword = new vscode.CompletionItem('«ERROR', vscode.CompletionItemKind.Keyword);
    error_keyword.detail = 'Insert ERROR block.';
    error_keyword.insertText = new vscode.SnippetString('«ERROR $0»')
    completionItems.push(error_keyword);

    const rem = new vscode.CompletionItem('«REM', vscode.CompletionItemKind.Keyword);
    rem.detail = 'Insert REM block.';
    rem.insertText = new vscode.SnippetString('«REM»\n$0«ENDREM-»')
    completionItems.push(rem);

    const around = new vscode.CompletionItem('«AROUND', vscode.CompletionItemKind.Keyword);
    around.detail = 'Insert AROUND block.';
    around.insertText = new vscode.SnippetString('«AROUND $1 FOR $2»\n$0\n«AROUND»')
    completionItems.push(around);

    const protect = new vscode.CompletionItem('«PROTECT', vscode.CompletionItemKind.Keyword);
    protect.detail = 'Insert PROTECT CSTART CEND ID block.';
    protect.insertText = new vscode.SnippetString('«PROTECT CSTART $1 CEND $2 ID $3»\n$0\n«ENDPROTECT»')
    completionItems.push(protect);

    const extension = new vscode.CompletionItem('«EXTENSION', vscode.CompletionItemKind.Keyword);
    extension.detail = 'Insert EXTENSION block.';
    extension.insertText = new vscode.SnippetString('«EXTENSION $0»')
    completionItems.push(extension);

    const import_keyword = new vscode.CompletionItem('«IMPORT', vscode.CompletionItemKind.Keyword);
    import_keyword.detail = 'Insert IMPORT block.';
    import_keyword.insertText = new vscode.SnippetString('«IMPORT $0»')
    completionItems.push(import_keyword);

    return completionItems;
}
