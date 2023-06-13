import { delay } from "doppio";

class Utility {
    public static ShuffleArray<T>(array: T[]): T[] {
        return [];
    }
}

export enum CurtainDeleyType {
    Shuffle,
    Order
}

export class Curtain {
    /**
     * parent element
     */
    private parent: HTMLElement;

    /**
     * appended children
     */
    private children: HTMLElement[] = [];

    /**
     * curtain count
     */
    public get curtainCount(): number {
        return this.colors.length;
    }

    /**
     * コンストラクタ. colorsの要素数だけカーテンを生成します.
     * @param element
     * @param colors
     * @param timeSeconds
     * @param radius
     */
    public constructor(
        readonly element: HTMLElement,
        readonly colors: string[] = [
            "#e91e63",
            "#f44336",
            "#ff5722",
            "#ff9800",
            "#ffc107",
            "#ffeb3b",
            "#cddc39",
            "#4caf50",
            "#009688",
            "#00bcd4",
            "#2196f3",
            "#3f51b5",
            "#9c27b0"
        ],
        readonly shadow = false,
        readonly radius = 0) {
        if (!element) {
            throw new Error("HTMLElement is undefined.");
        }
        this.parent = element;
        this.colors = colors;
        this.radius = radius;
    }

    /**
     * Initialize the parent element and append the curtain item to children.
     */
    public init(curtainHeight = "100vh", curtainOneItemWidth = 100, shadow = false) {
        // one curtain item width
        const itemWidth = 100 / this.colors.length;
        this.parent.style.display = "flex";
        for (const item of this.colors) {
            const div = document.createElement("div");
            // apply styles
            div.style.background = item;
            div.style.width = itemWidth + "%";
            div.style.height = curtainHeight;
            div.style.borderRadius = `0 0 ${this.radius}px ${this.radius}px`;
            this.shadow && div.classList.add("shadow-3");

            this.children.push(div);
            this.parent.appendChild(div);
        }
    }

    /**
     * Set and Play curtain animation.
     * @param curtainHeight css curtain height
     */
    public async play(curtainHeight = "0px", timeMs = 1500, curtainDelayType: CurtainDeleyType = CurtainDeleyType.Shuffle): Promise<void> {
        await delay(1);
        const itemDelays: number[] = [];
        let duration = 0;
        if (curtainDelayType === CurtainDeleyType.Shuffle) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.colors.length; i++) {
                const time = Math.random() * timeMs * 0.5;
                duration = Math.max(duration, time);
                itemDelays.push(time);
            }
        }
        else {
            const itemDelay = timeMs / this.colors.length;
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.colors.length; i++) {
                const time = itemDelay * 1;
                duration = Math.max(duration, time);
                itemDelays.push(time);
            }
        }

        for (const item of this.children) {
            item.style.transition = `all ${timeMs * 0.5}ms  cubic-bezier(0.860, 0.205, 0.330, 0.910)`;
            item.style.transitionDelay = `${itemDelays.shift()}ms`;
            item.style.height = curtainHeight;
        }

        await delay(timeMs + duration);
    }
}