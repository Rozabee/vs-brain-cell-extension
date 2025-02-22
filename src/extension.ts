// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vsbraincell" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vsbraincell.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);  
	
	context.subscriptions.push(
	vscode.commands.registerCommand('vsbraincell.countCell', async () => {
		const answer = await vscode.window.showInformationMessage(
			'Brain Cell count',
			"increase", 
			"cancel"
		);
		if (answer === "increase") {
			vscode.window.showInformationMessage('Brain Cell count increased');
		} else {
			vscode.window.showInformationMessage('Brain Cell count unchanged');
		} 

}));
}

// This method is called when your extension is deactivated
export function deactivate() {} 
