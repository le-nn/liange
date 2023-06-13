interface Subscription {
    dispose(): void;
}

/**
 * begin animation loop
 * @param func callback 
 */
export function beginTick(func: (delta: number) => void): Subscription {
    const loop = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        ((callback: () => void) => setTimeout(callback, 1000 / 60));
    const clearLoop = window.cancelAnimationFrame || clearTimeout;

    let id = 0;

    // invoke every ticks
    const update = (func: (delta: number) => void, lastTime: number) => {
        return () => {
            const now = Date.now();
            const delta = now - lastTime;
            id = loop(update(func, now));
            func(delta * 0.001);
        };
    };

    // begin loop
    id = loop(update(func, Date.now()));

    return {
        dispose: () => {
            clearLoop(id);
        }
    };
}
