declare namespace oCanvas {
    interface Core extends Events {
        addChild(display: any, redraw?: boolean): Core;
        clear(keepBackground?: boolean): Core;
        destroy(): void;
        redraw(): Core;
        removeChild(display: any, redraw?: boolean): Core;
        reset(): void;
        children: Array<any>;
        height: number;
        id: number;
        pointer: any;
        settings: any;
        display: Display;
        scenes: Scenes;
        animation: Animation;
        draw: Draw;
    }

    let canvasList: Array<any>;
    let version: string;
    function create(settings: {
        canvas: any,
        background: string,
        clearEachFrame?: boolean,
        drawEachFrame?: boolean,
        fps?: number,
        plugins?: Array<any>,
        disableScrolling?: boolean
    }): Core;
    function domReady(fun: Function): void;
    function extend(destination: Object, source: Object): any;
    function registerDisplayObject(name: string, constructor: Function, init: string): void;
    function registerModule(name: string, constructor: Function, init: string): void;
    function registerPlugin(name: string, plugin: Function): void;

    interface DisplayBase extends Events {
        add(redraw?: boolean): Display;
        addChild(display: any, returnIndex?: boolean): any;
        clone(settings?: Object): Display;
        getOrigin(): any;
        move(x: number, y: number): Display;
        moveTo(x: number, y: number): Display;
        remove(redraw?: boolean): Display;
        removeChild(display: any, redraw?: boolean): Display;
        removeChildAt(index: number, redraw?: boolean): Display;
        rotate(angle: number): Display;
        rotateTo(angle: number): Display;
        scale(x: number, y: number): Display;
        scaleTo(width: number, height: number): Display;
        setOrigin(x: any, y: any): Display;
        abs_x: number;
        abs_y: number;
        added: boolean;
        cap: string;
        children: Array<any>;
        clipChildren : boolean;
        composition: string;
        drawn: boolean;
        events: any;
        fill: string;
        id: number
        join: string;
        miterLimit: number;
        opacity: number;
        origin: any;
        parent: Display;
        pointerEvents: boolean;
        rotation: number;
        scalingX: number;
        scalingY: number;
        shadow: string;
        shadowBlur: number;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shapeType: string;
        stroke: string;
        strokeColor: string;
        strokeWidth: number;
        type: string;
        x: number;
        y: number;
        zIndex: number;
    }

    interface Display {
        register(): DisplayBase;
        arc(display: any): Arc;
        ellipse(display: any): Ellipse;
        image(display: any): Image;
        line(display: any): Line;
        polygon(display: any): Polygon;
        rectangle(display: any): Rectangle;
        sprite(display: any): Sprite;
        text(display: any): Text;
    }

    interface Arc extends DisplayBase {
        direction: string;
        end: number;
        pieSection: boolean;
        radius: number;
        start: number;
    }

    interface Ellipse extends DisplayBase {
        radius: number;
        radius_x: number;
        radius_y: number;
    }

    interface Image extends DisplayBase {
        height: number;
        image: any;
        loaded: boolean;
        tile: boolean;
        tile_height: number;
        tile_spacing_x: number;
        tile_spacing_y: number;
        tile_width: number;
        width: number;
    }

    interface Line extends DisplayBase {
        end: any;
        length: number;
        radius: number;
        start: any;
        x: number;
        y: number;
    }

    interface Polygon extends DisplayBase {
        radius: number;
        side: number;
        sides: number;
    }

    interface Rectangle extends DisplayBase {
        height: number;
        strokePosition: string;
        width: number;
    }

    interface Sprite extends DisplayBase {
        start(): Sprite;
        startAnimation(): Sprite;
        stop(): Sprite;
        stopAnimation(): Sprite;
        active: boolean;
        autostart: boolean;
        direction: string;
        duration: number;
        frame: number;
        frames: Array<any>;
        generate: boolean;
        height: number;
        image: any;
        loaded: boolean;
        loop: boolean;
        numFrames: number;
        offset_x: number;
        offset_y: number;
        width: number;
    }

    interface Text extends DisplayBase {
        align: string;
        baseline: string;
        family: string;
        font: string;
        height: number;
        lineHeight: any;
        size: number;
        style: string;
        text: string;
        variant: string;
        weight: string;
        width: number;
    }

    interface Background {
        set(background: String): Background;
        bg: any;
        type: string;
        value: string;
    }

    interface Timeline {
        currentFrame: number;
        fps: number;
        running: boolean;
        setLoop(fun: Function): Timeline;
        start(): Timeline;
        stop(): Timeline;
    }

    interface Keyboard {
        addPreventDefaultFor(keys: any): void;
        anyKeysDown(): boolean;
        getKeysDown(): Array<any>;
        numKeysDown(): number;
        removePreventDefaultFor(keys: any): void;
        ARROW_DOWN: number;
        ARROW_LEFT: number;
        ARROW_RIGHT: number;
        ARROW_UP: number;
        ENTER: number;
        ESC: number;
        SPACE: number;
    }

    interface Mouse {
        buttonState: string;
        canvasFocused: boolean;
        canvasHovered: boolean;
        x: number;
        y: number;
        cancel(): Mouse;
        cursor(value: string): Mouse;
        hide(): Mouse;
        onCanvas(): boolean;
        show(): Mouse;

    }

    interface Touch {
        canvasFocused: boolean;
        canvasHovered: boolean;
        dblTapInterval: number;
        touchState: string;
        x: number;
        y: number;
        cancel(): Touch;
        onCanvas(): boolean;
    }

    interface Events {
        keyboard: Keyboard;
        mouse: Mouse;
        touch: Touch;
        bind(type: string, handler: Function): any;
        dragAndDrop(options?: any): any;
        trigger(type: string, eventObject?: Object): any;
        unbind(type: string, handler: Function): any;
    }

    interface SceneInstance {
        loaded: boolean;
        name: string;
        objects: Array<any>;
        add(object: any): SceneInstance;
        load(): SceneInstance;
        remove(object: any): SceneInstance;
        unload(): SceneInstance;
    }

    interface Scenes {
        current: string;
        scenes: Object;
        create(name: string, init: Function): SceneInstance;
        load(name: string, unload?: boolean): Scenes;
        unload(name: string): Scenes;
    }

    interface Animation {
        defaults: {
            duration: string;
            easing: string;
        };
        durations: any;
        easing: any;
        animate(properties: Object, options?: Object): any;
        delay(duration: number, options?: Object): any;
        fadeIn(duration?: number, easing?: string, callback?: Function): any;
        fadeOut(duration?: number, easing?: string, callback?: Function): any;
        fadeTo(opacity: number, duration?: number, easing?: string, callback?: Function): any;
        finish(): any;
        stop(): any;
    }

    interface Draw {
        isCleared: boolean;
        objects: Array<any>;
        translation: Object;
        clear(keepBackground: boolean): Draw;
        redraw(): Draw;
    }



}

