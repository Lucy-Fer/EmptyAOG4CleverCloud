export class Conv {

    private messages: string[];
    private surface: any;
    private closed: boolean;
    private data: Object;
    private user: Object;

    constructor() {
        this.messages = [];
        this.surface = {
            capabilities : new Map()
        };
        this.closed = false;
        this.data = {};
        this.user = {
            storage : {}
        }
    }

    addCapabilities(capabilities) {
        capabilities.forEach(element => {
            this.surface.capabilities.set(element);
        });
    };

    ask(message) {
        this.messages.push(message);
    };

    asked() {
        return this.messages;
    };

    close(message) {
        this.closed = true;
        this.messages.push(message);
    };

    reset() {
        this.messages.splice(0, this.messages.length);
        console.log(this.surface);
        this.surface.capabilities.splice(0,this.surface.capabilities.length)
    };

    isClose(){
        return this.closed;
    }
};