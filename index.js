// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const keyList = ['A', 'B', 'X', 'Y', 'SPACE', 'UP', 'RIGHT', 'LEFT', 'DOWN', '1', '2', '3', '4', '5', '6', '7', '8'];
const menuIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iOTFERjQ3QTI2NUNCOUM3MUQxMUREOTIyNTU1N0FFODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENBQTY5RTYzNENGMTFFOUE5RUM5MkMxNEU3OTFGMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENBQTY5RTUzNENGMTFFOUE5RUM5MkMxNEU3OTFGMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWYyNmExZTgtNGE5Ni04NDQzLWJhMTAtMGRhNjIwMzUxNDM1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NDhkOTI2ODUtMzRhYy0xMWU5LWE3ZTktY2E3MmE0NDFiNjg3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WVN2zgAAAblQTFRFAAAA+Pj4BQUFERERBgYG/v7+9fX1BwcHCAgIFxcX+/v7+vr64+PjCQkJ19fXCwsL/Pz89/f3AwMDx8fH6OjodHR0j4+PoKCgEBAQCgoK4eHhJycnGxsbFBQUBAQE////wsLC/f39y8vLnJyccXFxlJSUGBgYpKSk7Ozs5OTkpaWl5ubmenp6kZGR2NjYJSUlQUFBNTU1k5OTJiYmurq62dnZPDw8HBwcbm5u+fn5YWFhxcXFsrKya2trdXV1ICAgEhIS7e3t0dHRjo6OwMDAPj4+qampp6enMzMzq6urDQ0NDAwMDg4OAQEBGhoamZmZjY2NLS0tvb29g4ODrKysRkZGaGhoV1dXh4eHMjIy6+vrhYWF6urq0tLSIiIiFRUVKioqiIiIZmZmbW1tkpKSzs7O5+fn2tratLS0lZWVLi4u8/PziYmJqKioo6OjODg4ExMTjIyMHx8fDw8Pnp6efHx8i4uL5eXlu7u7ZWVlS0tLkJCQioqKKCgo39/f1dXVXl5eycnJIyMj7u7uU1NT8PDwoqKiz8/PTk5OaWlpeHh409PTrq6ub29v9vb2tbW1Hh4euLi4////XtsoEgAAAJN0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AxGXrhgAAAe9JREFUeNrsledXE0EUxd/uZjc9IQkp9F6l9w5SVFQELChFAUXpRWkqRQVFioq+v9iZHRKWSeA4+DXvy9y9c39nZ+fNnAUULogj/488fJK2fFsIaXZbUu5ZBkSQSnfTkn/c6RBAnO+COS110C2AVFtePi6xWm4IIL1J9++EzI+Eduz9R3DmifalQrkpirQqLaLIglIlitxS2kQRn/JVFClSBv8dUeftkuTROhQbos3jkUjZNdsVSHbTjtkkm0zekCLLcjpRJvJorv/sU2Mjb4YhXO6QDBdqrywW4gJozyyAy6o5GvlG7EJEytSbL4RX2OCIQiqJS4ZpgA1VemogvqgBfbRmcEgRdXO0/R4A8qmJBiQB/zDxiUOenWfITflhQDQcZaKBQ+qYXTEEcLd4Oxy3BrYCKp50ra17Aao5JFWP1CJqE4Y3+CPb9IDwHJJCE2+pSjYg5YlZkooZjfZs0qdUDvlJE51USVxDfmEpE4cc8pyak1S9ZoEyRzoTjRhkooZD1CTq+hAL0/T5EsR+lhzBmfBuc638zhY/d7Yccnqz+nT1IndVH0+jz1ie8QNc1DE2FHJjneTFyLS8y5yx/Ig1G/u+bL7y0tn8KinsJAR/68CH5MuumD1zqsF/4DJatcXHR6U1Uvz3GkeujfwVYACqxmoLLUKJ7AAAAABJRU5ErkJggg==';

const musicTone = {
    DADADADUM: 0,
    ENTERTAINER: 1,
    PRELUDE: 2,
    ODE: 3,
    NYAN: 4,
    RINGTONE: 5,
    FUNK: 6,
    BLUES: 7,
    BIRTHDAY: 8,
    WEDDING: 9,
    FUNERAL: 10,
    PUNCHLINE: 11,
    BADDY: 12,
    CHASE: 13,
    BA_DING: 14,
    WAWAWAWAA: 15,
    JUMP_UP: 16,
    JUMP_DOWN: 17,
    POWER_UP: 18,
    POWER_DOWN: 19
};

const HIDKeyMapping = {
    [0x1e]: '1',
    [0x1f]: '2',
    [0x20]: '3',
    [0x21]: '4',
    [0x22]: '5',
    [0x23]: '6',
    [0x24]: '7',
    [0x25]: '8',
    [0x52]: 'up',
    [0x51]: 'down',
    [0x50]: 'left',
    [0x4f]: 'right',
    [0x2c]: 'space',
    [0x1b]: 'x',
    [0x1c]: 'y',
    [0x04]: 'a',
    [0x05]: 'b',
    // player2
    [0x17]: 't',
    [0x09]: 'f',
    [0x0a]: 'g',
    [0x0b]: 'h',
    [0x0c]: 'i',
    [0x0d]: 'j',
    [0x0e]: 'k',
    [0x0f]: 'l'
};

class Joyfrog {
    constructor (runtime){
        this.comm = runtime.ioDevices.comm;
        this.runtime = runtime;
        this.runtime.registerPeripheralExtension('JoyFrog', this);
        // session callbacks
        this.onmessage = this.onmessage.bind(this);
        this.onclose = this.onclose.bind(this);
        this.write = this.write.bind(this);
        this.decoder = new TextDecoder();
        this.reporter = {};
        
        this.keyPressed = this.keyPressed.bind(this);
        this.runtime.on('KEY_PRESSED', this.keyPressed);
        this.joyX = 0;
        this.joyY = 0;
        
        this.infraData = null;

        const viewedTutorial = localStorage.getItem("showed-joyfrog-tutorial")
        if (!viewedTutorial){
            runtime.showDeck('joyfrog-tutorial');
            localStorage.setItem("showed-joyfrog-tutorial", 1);
        }
    }

    write (data, parser = null, key){
        if (this.session){
            return new Promise(resolve => {
                if (key){
                    this.reporter[key] = [resolve, parser, data];
                }
                this.session.write(data);
            });
        }
    }


    report (data){
        return new Promise(resolve => {
            this.write(data);
            this.reporter = resolve;
        });
    }


    onmessage (data){
        const dataStr = this.decoder.decode(data);
        this.lineBuffer += dataStr;
        if (this.lineBuffer.indexOf('\n') !== -1){
            const lines = this.lineBuffer.split('\n');
            this.lineBuffer = lines.pop();
            for (const l of lines) {
                const tmp = l.trim().split(' ');
                if (tmp[0] === 'M4'){ // infra rx
                    this.infraData = tmp[1];
                    this.runtime.startHats('JoyFrog_onInfraGet', {});
                } else if (tmp[0] === 'M1'){ // joystick echo
                    this.keyPressed(HIDKeyMapping[parseInt(tmp[1])]);
                    this.joyX = parseInt(tmp[2]);
                    this.joyY = parseInt(tmp[3]);
                } else if (tmp[0] === 'M2'){ // button pressed
                    this.keyPressed(HIDKeyMapping[parseInt(tmp[1])]);
                } else {
                    const obj = this.reporter[tmp[0]];
                    if (obj){
                        const res = obj[0];
                        const parser = obj[1];
                        let ret = 0;
                        if (parser) ret = parser(tmp.slice(1).join(' '));
                        res(ret);
                        delete this.reporter[tmp[1]];
                    }
                }
            }
        }
    }

    onclose (){
        this.session = null;
    }

    // method required by vm runtime
    scan (){
        this.comm.getDeviceList().then(result => {
            this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
        });
    }

    connect (id){
        this.comm.connect(id).then(sess => {
            this.session = sess;
            this.session.onmessage = this.onmessage;
            this.session.onclose = this.onclose;
            // notify gui connected
            this.runtime.emit(this.runtime.constructor.PERIPHERAL_CONNECTED);
            setTimeout(() => {
                sess.write('M0\r\n');
            }, 2000);
        }).catch(err => {
            log.warn('connect peripheral fail', err);
        });
    }

    disconnect (){
        this.session.close();
    }

    isConnected (){
        return Boolean(this.session);
    }

    getInfo (){
        return {
            id: 'JoyFrog',
            name: 'Joy Frog',
            menuIconURI: menuIcon,
            blockIconURI: menuIcon,

            showStatusButton: true,

            blocks: [
                {
                    opcode: 'whenKeyPressed',
                    text: 'when [KEY] key pressed',
                    blockType: BlockType.HAT,
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            menu: 'keys',
                            defaultValue: 'X'
                        }
                    },
                    isEdgeActivated: false,
                    func: 'hatFilter'
                },
                {
                    opcode: 'whenPadTouched',
                    text: 'when pad [PAD] touched',
                    blockType: BlockType.HAT,
                    arguments: {
                        PAD: {
                            type: ArgumentType.STRING,
                            menu: 'pads',
                            defaultValue: '1'
                        }
                    },
                    isEdgeActivated: false,
                    func: 'hatFilter'
                },
                '---',
                {
                    opcode: 'buzzerTone',
                    text: 'Buzzer Tone [FREQ] Hz [DELAY] ms',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        FREQ: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 330
                        },
                        DELAY: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 500
                        }
                    }
                },
                {
                    opcode: 'notefreq',
                    text: '[NOTE]',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        NOTE: {
                            type: ArgumentType.STRING,
                            menu: 'pads',
                            defaultValue: '1'
                        }
                    },
                    func: 'notefreq'
                },
                {
                    opcode: 'buzzerMusic',
                    text: 'Buzzer Music [MUSIC]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        MUSIC: {
                            type: ArgumentType.STRING,
                            menu: 'musicMenu',
                            defaultValue: 'NYAN'
                        }
                    }
                },
                {
                    opcode: 'infraSend',
                    text: 'Infra send [DATA]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                            defaultValue: 'AABBCCDD'
                        }
                    }
                },
                {
                    opcode: 'onInfraGet',
                    text: 'On Infra Got',
                    blockType: BlockType.HAT,
                    func: 'hatFilter',
                    isEdgeActivated: false
                },
                {
                    opcode: 'infradata',
                    text: 'Infra Data',
                    blockType: BlockType.REPORTER
                },
                '---',
                {
                    opcode: 'portdigiwr',
                    text: 'Port [PORT] Write [VAL]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PORT: {
                            type: ArgumentType.STRING,
                            menu: 'port',
                            defaultValue: '1'
                        },
                        VAL: {
                            type: ArgumentType.NUMBER,
                            menu: 'onoff',
                            defaultValue: '1'
                        }
                    },
                    func: 'portdigiwr'
                },
                {
                    opcode: 'portdigird',
                    text: 'Port [PORT] Read',
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        PORT: {
                            type: ArgumentType.STRING,
                            menu: 'port',
                            defaultValue: '1'
                        }
                    },
                    func: 'portdigird'
                },
                {
                    opcode: 'portpwm',
                    text: 'Port [PORT] pwm pulse [T0]us Period [T1]us',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PORT: {
                            type: ArgumentType.STRING,
                            menu: 'port',
                            defaultValue: '1'
                        },
                        T0: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1000
                        },
                        T1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50000
                        }
                    },
                    func: 'portpwm'
                },
                {
                    opcode: 'portServo',
                    text: 'Port [PORT] Servo [DEGREE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        PORT: {
                            type: ArgumentType.STRING,
                            menu: 'port',
                            defaultValue: '1'
                        },
                        DEGREE: {
                            type: ArgumentType.SLIDERSERVO,
                            defaultValue: 90
                        }
                    },
                    func: 'portServo'
                },
                {
                    opcode: 'portanalog',
                    text: 'Port [PORT] analog',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        PORT: {
                            type: ArgumentType.STRING,
                            menu: 'port',
                            defaultValue: '1'
                        }
                    },
                    func: 'portanalog'
                }
            ],
            menus: {
                port: [
                    {text: 'Port3', value: '1'},
                    {text: 'Port4', value: '2'}
                ],
                keys: ['X', 'Y', 'A', 'B',
                    {text: '↑', value: 'UP'},
                    {text: '↓', value: 'DOWN'},
                    {text: '←', value: 'LEFT'},
                    {text: '→', value: 'RIGHT'},
                    'SPACE', '1', '2', '3', '4', '5', '6', '7', '8',
                    'T', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                ],
                pads: [
                    {text: 'Do', value: '1'},
                    {text: 'Re', value: '2'},
                    {text: 'Mi', value: '3'},
                    {text: 'Fa', value: '4'},
                    {text: 'So', value: '5'},
                    {text: 'Ra', value: '6'},
                    {text: 'Si', value: '7'},
                    {text: 'Do~', value: '8'}
                ],
                dirs: ['X', 'Y'],
                onoff: ['0', '1'],
                musicMenu: ['DADADADUM', 'ENTERTAINER', 'PRELUDE', 'ODE', 'NYAN', 'RINGTONE',
                    'FUNK', 'BLUES', 'BIRTHDAY', 'WEDDING', 'FUNERAL', 'PUNCHLINE',
                    'BADDY', 'CHASE', 'BA_DING', 'WAWAWAWAA', 'JUMP_UP', 'JUMP_DOWN', 'POWER_UP', 'POWER_DOWN'],
            },
            translation_map: {
                'zh-cn': {
                    whenKeyPressed: '当 按键[KEY] 按下',
                    whenPadTouched: '当 键盘[PAD] 触碰',
                    joystickValue: '遥杆 [DIR] 值',
                    buzzerTone: '蜂鸣器 音调 [FREQ] Hz [DELAY] ms',
                    buzzerMusic: '蜂鸣器 播放音乐 [MUSIC]',
                    infraSend: '红外发射 [DATA]',
                    onInfraGet: '当红外收到',
                    infradata: '红外解码数据',
                    portdigiwr: '端口 [PORT] 写 [VAL]',
                    portdigird: '端口 [PORT] 读',
                    portpwm: '端口 [PORT] pwm 脉冲 [T0]us 周期 [T1]us',
                    portServo: '端口 [PORT] 舵机角度 [DEGREE]',
                    portanalog: '端口 [PORT] 模拟值'
                },
                'zh-tw': {
                    whenKeyPressed: '當 按鈕[KEY] 按下',
                    whenPadTouched: '當 鍵盤[PAD] 觸碰',
                    joystickValue: '搖桿 [DIR] 值',
                    buzzerTone: '蜂鳴器 音調 [FREQ] Hz [DELAY] ms',
                    buzzerMusic: '蜂鳴器 播放音樂 [MUSIC]',
                    infraSend: '紅外線發射 [DATA]訊號',
                    onInfraGet: '當收到紅外線訊號',
                    infradata: '紅外線解碼數據',
                    portdigiwr: '埠口 [PORT] 寫 [VAL]',
                    portdigird: '埠口 [PORT] 讀',
                    portpwm: '埠口 [PORT] pwm 脈沖 [T0]us 週期 [T1]us',
                    portServo: '埠口 [PORT] 舵機角度 [DEGREE]',
                    portanalog: '埠口 [PORT] 類比值'
                }
            }
        };
    }
    noop (){
    }

    hatFilter (args){
        return true;
    }

    keyPressed (key) {
        key = key.split(' ')[0];
        key = key.toUpperCase();
        if (keyList.indexOf(key) > -1){
            this.runtime.startHats('JoyFrog_whenKeyPressed', {keys: key});
            const keyNum = parseInt(key, 10);
            if (keyNum && keyNum <= 8 && keyNum > 0){
                this.runtime.startHats('JoyFrog_whenPadTouched', {pads: key});
            }

        }
    }
    
    joystickValue (args){
        const cmd = 'M1\r\n';
        return this.write(cmd, ret => {
            const tmp = ret.split(' ');
            return args.DIR === 'X' ? tmp[0] : tmp[1];
        }, 'M1');
    }
    
    buzzerTone (args){
        return this.write(`M5 ${args.FREQ} ${args.DELAY}\n`, null, 'M5');
    }
    
    notefreq (args){
        const noteFreqMap = [262, 294, 330, 349, 392, 440, 494, 523];
        return noteFreqMap[parseInt(args.NOTE)-1];
    }
    
    buzzerMusic (args){
        const music = musicTone[args.MUSIC];
        // M6 reserved for direct notes write
        return this.write(`M7 ${music}\n`, null, 'M7');
    }
    
    infraSend (args){
        const data = args.DATA;
        if (!/^[0-9a-fA-F]+$/.test(data)){
            vm.emit('showAlert', {type: 'error', msg: `only hex string support`});
            return;
        }
        
        return this.write(`M3 ${args.DATA}\n`, null, 'M3');
    }
    
    infradata (args){
        const ret = this.infraData;
        // this.infraData = null; // consume data
        return ret;
    }
    
    portdigiwr (args){
        if (this.session){
            this.session.write(`M9 ${args.PORT} ${args.VAL}\n`);
        }
    }
    
    portdigird (args){
        return this.write(`M8 ${args.PORT}\n`, ret => {
            return ret.split(" ")[1] || 0;
        }, 'M8')
    }
    
    portpwm (args){
        if (this.session){
            this.session.write(`M12 ${args.PORT} ${args.T0} ${args.T1}\n`);
        }
    }
    
    portServo (args){
        const t0 = Math.round(args.DEGREE*50/9+1000);
        if (this.session){
            this.session.write(`M12 ${args.PORT} ${t0} 50000\n`);
        }
    }
    
    portanalog (args){
        return this.write(`M11 ${args.PORT}\n`, ret => {
            return parseInt(ret, 10);
        }, 'M11')
    }
    
}


module.exports = Joyfrog;
