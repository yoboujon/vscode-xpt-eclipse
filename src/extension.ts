import * as vscode from "vscode";
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidOpenTextDocument(checkEncoding);
}

export function deactivate() { }

async function checkEncoding(document: vscode.TextDocument) {
    const uri = document.uri;
    const gitvirtualfile = path.basename(document.uri.path).endsWith("git");

    const name = path.basename(document.uri.path);
    /*
        ISO-8859-1 vs UTF-8 encoding: 
            0xab -> 0xc2ab
            0xbb -> 0xc2bb
    */
    const utf8Pattern_back = new Uint8Array([0xc2, 0xab]);
    const utf8Pattern_forward = new Uint8Array([0xc2, 0xbb]);

    try {
        let fileData = await vscode.workspace.fs.readFile(uri);
        const containsUTF8 = containsArr(utf8Pattern_back, fileData) || containsArr(utf8Pattern_forward, fileData);

        if (!gitvirtualfile && !containsUTF8) {
            const result = await vscode.window.showErrorMessage(`'${name}': Contains ISO-8859-1 characters, do you wish to convert the file to UTF-8 ?`,
                'Yes',
                'No'
            );

            if (result === 'Yes') {
                fileData = replaceBytes(fileData, 0xab, utf8Pattern_back);
                fileData = replaceBytes(fileData, 0xbb, utf8Pattern_forward);
                await vscode.workspace.fs.writeFile(uri, fileData);
            }
        }

    } catch (error: any) {
        // Normal if read too soon ?
        if (error.code === 'NoPermissions') {
            vscode.window.showErrorMessage(`Error writing to file '${name}': ${error.message}`);
        }
    }
}

function containsArr(pattern: Uint8Array, fileData: Uint8Array<ArrayBufferLike>) {
    const contains = fileData.some((_, i) =>
        i < fileData.length - 1 &&
        fileData[i] === pattern[0] &&
        fileData[i + 1] === pattern[1]
    );
    return contains;
}

function replaceBytes(data: Uint8Array, target: number, replacement: Uint8Array): Uint8Array {
    let result: number[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === target) {
            result.push(...replacement);
        } else {
            result.push(data[i]);
        }
    }

    return new Uint8Array(result);
}