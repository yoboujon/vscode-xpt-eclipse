# VSCode Eclipse Xpand > Contributing

## Getting Started

### Dependencies

|Name|Windows|Linux|
|:--|--:|--:|
|🧶 NodeJS|Download NodeJS [here](https://nodejs.org/en/download)|```apt install nodejs```|
|🐍 Python|Download Python [here](https://www.python.org/downloads/windows/)|```apt install python```|

### Debugging

Install the dependencies for the project:
```
npm install
```
**Then, Press `F5` for debug** and enjoy modifying the code ! Don't forget to open the files inside the [example](example/) folder.

### Compiling to .vsix

Install `vsce` globally:
```
npm install -g @vscode/vsce
```
Then, compile it using vsce:
```
vsce package
```
