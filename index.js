// Modules to control application life and create native browser window//
const {app, BrowserWindow, globalShortcut, ipcMain} = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
//let mainWindow
let screen1Window
let screen2Window
let screen3Window
let screen4Window
let screen5Window
let screen6Window
let screen7Window
let configWindow
let firststartWindow
//////////////////////////////////////////////////////////////////////////////

//Получаем имя пользователя для пути хранения конфига
var os = require('os');
os.userInfo().username
var username = os.userInfo().username
var file = "c:/Users/"+username+"/AppData/Roaming/mswl_config.json";
//////////////////////////////////////////////////////////////////////////////
function createWindow1 () {
  // Create the browser window.
  screen1Window = new BrowserWindow({title: "MSWL Screen 1", backgroundColor: '#2e2c29', thickFrame: false, resizable: false, width: 1920, height: 1080, x: 0, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  // and load the index.html of the app.
 	// Start page
  	if (global.screen1 == "off") {
		screen1Window.loadFile('src/index.html')
		} else {
		screen1Window.loadURL(global.screen1)
		};
  // Open the DevTools.
   //mainWindow.webContents.openDevTools()
   //Focus on content
	screen1Window.webContents.sendInputEvent({type:'mouseDown', x:5, y: 5, button:'left', clickCount: 1});
	screen1Window.webContents.sendInputEvent({type:'mouseUp', x:5, y: 5, button:'left', clickCount: 1});
  // Emitted when the window is closed.
  screen1Window.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    screen1Window = null
  })
};
function createWindow2 () {
  screen2Window = new BrowserWindow({title: "MSWL Screen 2", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 1920, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen2Window.loadURL(global.screen2)
   //Focus on content
	screen2Window.webContents.sendInputEvent({type:'mouseDown', x:1925, y: 5, button:'left', clickCount: 1});
	screen2Window.webContents.sendInputEvent({type:'mouseUp', x:1925, y: 5, button:'left', clickCount: 1});
    screen2Window.on('closed', function () {
    screen2Window = null
  })
};
function createWindow3 () {
  screen3Window = new BrowserWindow({title: "MSWL Screen 3", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 3840, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen3Window.loadURL(global.screen3)
   //Focus on content
	screen3Window.webContents.sendInputEvent({type:'mouseDown', x:3845, y: 5, button:'left', clickCount: 1});
	screen3Window.webContents.sendInputEvent({type:'mouseUp', x:3845, y: 5, button:'left', clickCount: 1});
    screen3Window.on('closed', function () {
    screen3Window = null
  })
};
function createWindow4 () {
  screen4Window = new BrowserWindow({title: "MSWL Screen 4", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 5760, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen4Window.loadURL(global.screen4)
   //Focus on content
	screen4Window.webContents.sendInputEvent({type:'mouseDown', x:5765, y: 5, button:'left', clickCount: 1});
	screen4Window.webContents.sendInputEvent({type:'mouseUp', x:5765, y: 5, button:'left', clickCount: 1});
    screen4Window.on('closed', function () {
    screen4Window = null
  })
};
function createWindow5 () {
  screen5Window = new BrowserWindow({title: "MSWL Screen 5", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 7680, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen5Window.loadURL(global.screen5)
   //Focus on content
	screen5Window.webContents.sendInputEvent({type:'mouseDown', x:7685, y: 5, button:'left', clickCount: 1});
	screen5Window.webContents.sendInputEvent({type:'mouseUp', x:7685, y: 5, button:'left', clickCount: 1});
    screen5Window.on('closed', function () {
    screen5Window = null
  })
};
function createWindow6 () {
  screen6Window = new BrowserWindow({title: "MSWL Screen 6", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 9600, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen6Window.loadURL(global.screen6)
   //Focus on content
	screen6Window.webContents.sendInputEvent({type:'mouseDown', x:9605, y: 5, button:'left', clickCount: 1});
	screen6Window.webContents.sendInputEvent({type:'mouseUp', x:9605, y: 5, button:'left', clickCount: 1});
    screen6Window.on('closed', function () {
    screen6Window = null
  })
};
function createWindow7 () {
  screen7Window = new BrowserWindow({title: "MSWL Screen 7", thickFrame: false, resizable: false,  width: 1920, height: 1080, x: 11520, y: 0, alwaysOnTop: true, kiosk: true, frame: false, autoHideMenuBar: true})
  screen7Window.loadURL(global.screen7)
   //Focus on content
	screen7Window.webContents.sendInputEvent({type:'mouseDown', x:11525, y: 5, button:'left', clickCount: 1});
	screen7Window.webContents.sendInputEvent({type:'mouseUp', x:11525, y: 5, button:'left', clickCount: 1});
    screen7Window.on('closed', function () {
    screen7Window = null
  })
};
////////////////////////////////////////////////////////////////////////////////
function createWindowConfig() {
configWindow = new BrowserWindow({parent: screen1Window ,resizable: false, width: 500, height: 300, center: true, alwaysOnTop: true, autoHideMenuBar: true, opacity:0.95, movable: false  })
configWindow.loadFile('src/config.html')
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow)
//////////////////////////////////////////////////////////////////////////////
//Проверка существования конфига и создание в случае отсутсвия
// Исправить этот участок. В торая проверка ненужна, просто создать конфиг и перезапустить
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
	//1
	app.on('ready', createWindow1);
	//2
	if (global.screen2 != "off") {app.on('ready', createWindow2)};
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
app.on('ready', () => {
    // Регистрация слушателя сочетания клавиш 'CommandOrControl+S'.
   globalShortcut.register('CommandOrControl+S', () => {
	  	createWindowConfig();
  })
});
app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Q', () => {
	 app.exit();
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
 		app.exit();
  })
});
/////////////////////////////////////////////////////////////////////////////
ipcMain.on('restart_signal',function(event, arg) {
//  console.log(arg);
  app.relaunch();
  app.exit();
});
ipcMain.on('close_signal',function(event, arg) {
//  console.log(arg);
  app.exit();
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

//
//autor @Toshino_Kyoko
//telegram  https://t.me/Toshino_Kyoko
//e-mail llortiel@gmail.com
//
