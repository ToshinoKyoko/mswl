import { app, BrowserWindow, globalShortcut, ipcMain, powerSaveBlocker } from 'electron';
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let screen1Window
let screen2Window
let screen3Window
let screen4Window
let screen5Window
let screen6Window
let screen7Window
let configWindow
///////////////////////////////////////////////////////////////////////////////
function createWindow1 () {
  screen1Window = new BrowserWindow({title: "Screen 1", backgroundColor: '#2e2c29', thickFrame: false, resizable: false, width: 1920, height: 1080, x: 0, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  	if (global.screen1 == "off") {
		screen1Window.loadFile('src/index.html')
		} else {
		screen1Window.loadURL(global.screen1)
		};
   //Stupid hack for focus on content
	screen1Window.webContents.sendInputEvent({type:'mouseDown', x:5, y: 5, button:'left', clickCount: 1});
	screen1Window.webContents.sendInputEvent({type:'mouseUp', x:5, y: 5, button:'left', clickCount: 1});
};
function createWindow2 () {
  screen2Window = new BrowserWindow({title: "Screen 2", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 1920, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen2Window.loadURL(global.screen2)
   //Focus on content
	screen2Window.webContents.sendInputEvent({type:'mouseDown', x:1925, y: 5, button:'left', clickCount: 1});
	screen2Window.webContents.sendInputEvent({type:'mouseUp', x:1925, y: 5, button:'left', clickCount: 1});
};
function createWindow3 () {
  screen3Window = new BrowserWindow({title: "Screen 3", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 3840, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen3Window.loadURL(global.screen3)
   //Focus on content
	screen3Window.webContents.sendInputEvent({type:'mouseDown', x:3845, y: 5, button:'left', clickCount: 1});
	screen3Window.webContents.sendInputEvent({type:'mouseUp', x:3845, y: 5, button:'left', clickCount: 1});
};
function createWindow4 () {
  screen4Window = new BrowserWindow({title: "Screen 4", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 5760, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen4Window.loadURL(global.screen4)
   //Focus on content
	screen4Window.webContents.sendInputEvent({type:'mouseDown', x:5765, y: 5, button:'left', clickCount: 1});
	screen4Window.webContents.sendInputEvent({type:'mouseUp', x:5765, y: 5, button:'left', clickCount: 1});
};
function createWindow5 () {
  screen5Window = new BrowserWindow({title: "Screen 5", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 7680, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen5Window.loadURL(global.screen5)
   //Focus on content
	screen5Window.webContents.sendInputEvent({type:'mouseDown', x:7685, y: 5, button:'left', clickCount: 1});
	screen5Window.webContents.sendInputEvent({type:'mouseUp', x:7685, y: 5, button:'left', clickCount: 1});
};
function createWindow6 () {
  screen6Window = new BrowserWindow({title: "Screen 6", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 9600, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen6Window.loadURL(global.screen6)
   //Focus on content
	screen6Window.webContents.sendInputEvent({type:'mouseDown', x:9605, y: 5, button:'left', clickCount: 1});
	screen6Window.webContents.sendInputEvent({type:'mouseUp', x:9605, y: 5, button:'left', clickCount: 1});
};
function createWindow7 () {
  screen7Window = new BrowserWindow({title: "Screen 7", backgroundColor: '#2e2c29', thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 11520, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen7Window.loadURL(global.screen7)
   //Focus on content
	screen7Window.webContents.sendInputEvent({type:'mouseDown', x:11525, y: 5, button:'left', clickCount: 1});
	screen7Window.webContents.sendInputEvent({type:'mouseUp', x:11525, y: 5, button:'left', clickCount: 1});
};
////////////////////////////////////////////////////////////////////////////////
function createWindowConfig() {
configWindow = new BrowserWindow({parent: screen1Window ,resizable: false, width: 500, height: 300, center: true, alwaysOnTop: true, autoHideMenuBar: true, opacity:0.95, movable: false  })
configWindow.loadFile('src/config.html')
};
////////////////////////////////////////////////////////////////////////////////
// Блокировка энергосбережения
//const id =
powerSaveBlocker.start('prevent-display-sleep');
//console.log(powerSaveBlocker.isStarted(id))
//////////////////////////////////////////////////////////////////////////////
//Получаем имя пользователя для пути хранения конфига
var os = require('os');
os.userInfo().username
var username = os.userInfo().username
var file = "c:/Users/"+username+"/AppData/Roaming/mswl_config.json";
//////////////////////////////////////////////////////////////////////////////
// Убиваем explorer.exe
var exec = require('child_process').exec;
function startExplorer() {
   exec('cmd.exe /c "explorer.exe"', function(err, data) {
      //  console.log(err)
      //  console.log(data.toString());
    });
};
// Запуск explorer.exe
function killExplorer() {
   exec('cmd.exe /c "taskkill /IM explorer.exe /F"', function(err, data) {
      //  console.log(err)
      //  console.log(data.toString());
    });
};
// Вызов функции остановки explorer.exe
killExplorer();
////////////////////////////////////////////////////////////////////////////////
//Проверка существования конфига и создание в случае отсутсвия
// Исправить этот участок. Вторая проверка ненужна, просто создать конфиг и перезапустить
function createConfig() {
	var fs = require('fs');
	if (fs.existsSync(file)) {
  console.log('Found file');
} else {
	console.log('NOT Found file');
	var defConfig =	'{"name":"some_store","screen1":"off","screen2":"off","screen3":"off","screen4":"off","screen5":"off","screen6":"off","screen7":"off"}';
	defConfig = JSON.parse(defConfig);
	// Write file
	fs.writeFile(file, JSON.stringify(defConfig), (err) => {
	if (err) {
      console.error(err);
      return;
	};
		console.log("File has been created");
		app.relaunch();
		app.exit();
		});
	}
};
//////////////////////////////////////////////////////////////////////////////
//Парсинг конфига
function parceConfig () {
	var fs = require("fs");
	var config = fs.readFileSync(file, "utf8");
	config = JSON.parse(config);
	global.screen1 = config.screen1
	global.screen2 = config.screen2
  global.screen3 = config.screen3
  global.screen4 = config.screen4
  global.screen5 = config.screen5
  global.screen6 = config.screen6
  global.screen7 = config.screen7
// И запуск окон(renderer процессы)
	//1
	app.on('ready', createWindow1);
	//2,3,4,5,6,7
	if (global.screen2 != "off") {app.on('ready', createWindow2)};
  if (global.screen3 != "off") {app.on('ready', createWindow3)};
  if (global.screen4 != "off") {app.on('ready', createWindow4)};
  if (global.screen5 != "off") {app.on('ready', createWindow5)};
  if (global.screen6 != "off") {app.on('ready', createWindow6)};
  if (global.screen7 != "off") {app.on('ready', createWindow7)};
};
///////////////////////////////////////////////////////////////////////////
// Проверка существаоания конфига
function chkConfig() {
	var fs = require('fs');
	if (fs.existsSync(file)) {
	console.log('Found file');
	parceConfig();
} else {
	console.log('NOT Found file');
	createConfig();
}
};
//////////////////////////////////////////////////////////////////////////
//Запуск проверки существования конфига
chkConfig();
//////////////////////////////////////////////////////////////////////////
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow)
//////////////////////////////////////////////////////////////////////////////
//Обработка хоткеев
app.on('ready', () => {
   globalShortcut.register('CommandOrControl+S', () => {
	  	createWindowConfig();
  })
});
app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Q', () => {
  startExplorer();
	 app.exit(0);
  })
});
app.on('ready', () => {
    globalShortcut.register('CommandOrControl+D', () => {
		 screen1Window.webContents.openDevTools()
  })
});

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+R', () => {
    app.relaunch();
 		app.exit(0);
  })
});
/////////////////////////////////////////////////////////////////////////////
//Обработка сигналов от renderer процессов
ipcMain.on('restart_signal',function(event, arg) {
//  console.log(arg);
  app.relaunch();
  app.exit(0);
});
ipcMain.on('close_signal',function(event, arg) {
//  console.log(arg);
  startExplorer();
  app.exit(0);
});
ipcMain.on('settings_signal',function(event, arg) {
//  console.log(arg);
createWindowConfig();
});

ipcMain.on('dev_signal',function(event, arg) {
//  console.log(arg);
screen1Window.webContents.openDevTools()
});
/////////////////////////////////////////////////////////////////////////////
  // Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (screen1Window === null) {
    createWindow1();
  }
});
//
//autor @Toshino_Kyoko
//telegram  https://t.me/Toshino_Kyoko
//e-mail llortiel@gmail.com
//
