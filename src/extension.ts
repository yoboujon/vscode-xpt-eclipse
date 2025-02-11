import * as vscode from "vscode";

interface XpandConfig {
    files: {
        encoding: string;
    };
}

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration();
    const xpand_config = config.get("[xpand]") as { [key: string]: any };

    check_encoding(xpand_config);

    /*
    ISO-88591 vs UTF-8 encoding: 
        0xab -> 0xc2ab
        0xbb -> 0xc2bb
    */
}

export function deactivate() { }

async function check_encoding(xpand_config: { [key: string]: any; }) {
    if ((xpand_config !== undefined) && (xpand_config["files.encoding"] === "iso88591"))
        return;

    const result = await vscode.window.showInformationMessage(
        'To correctly read ".xpt" files, encoding should be set to ISO8859-1, Do you wish to change the encoding globally?',
        'Yes',
        'No, not this time',
        'No, never ask again'
    );

    if (result === 'Yes') {
        change_encoding(xpand_config);
    }
}

function change_encoding(xpand_config: { [key: string]: any; })
{
    console.log(xpand_config)
    xpand_config = {
        ...xpand_config,
        "files.encoding": "iso88591"
    };
    console.log(xpand_config)

    /*

    // Update settings globally
    config.update("[xpand]", updatedSettings, vscode.ConfigurationTarget.Global)
        .then(() => {
            vscode.window.showInformationMessage('".xpt" files will now be encoded with ISO 8859-1.');
        }, err => {
            console.error("Failed to update encoding:", err);
        });
        */
}