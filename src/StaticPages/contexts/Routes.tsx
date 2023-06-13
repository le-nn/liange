import React, { MutableRefObject } from "react";
import { animate, delay } from "doppio";
import { Curtain as CurtainCore } from "../../models/curtain";

const CurtainContext = React.createContext<MutableRefObject<CurtainCore | null> | null>(null);

const CurtainProvider = CurtainContext.Provider;


export const useCurtain = () => {
    const curtain = React.useContext(CurtainContext);

    return {
        open: async (durationMs = 800) => {
            await delay(1);
            await curtain?.current?.play("2.5px", durationMs);
        },
        close: async (durationMs = 800) => {
            await delay(1);
            await curtain?.current?.play("100vh", durationMs);
        }
    };
};

interface CurtainProps {
    children: React.ReactNode;
    colors: string[];
    styles?: any;
}

export function Curtain(props: CurtainProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const curtain = React.useRef<CurtainCore | null>(null);

    const init = async () => {
        if (ref.current) {
            const c = new CurtainCore(ref.current, props.colors, true);
            curtain.current = c;
            c.init();
        }
    };

    React.useEffect(() => {
        init();
    }, []);

    return <>
        <CurtainProvider value={curtain}>
            {
                props.children
            }
            <div className="curtain" ref={ref} />
        </CurtainProvider >
    </>;
}