'use client'
import s from './page.module.css'
import React, {MouseEvent, useEffect, useState} from "react";

interface Position {
    x: number;
    y: number;
}

export default function Home() {
    const [position, setPosition] = useState<Position>({x: 0, y: 0});
    const [maxPos, setMaxPos] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        setMaxPos({x: window.innerWidth, y: window.innerHeight})
    }, []);

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        const cursorX = event.clientX;
        const cursorY = event.clientY;
        const rect = (event.target as HTMLDivElement).getBoundingClientRect();

        const maxXRect = (maxPos?.x ?? 2048 - rect.width);
        const maxYRect = (maxPos?.y ?? 2048 - rect.height);
        console.log(maxXRect, rect)
        setPosition({x: maxXRect, y: 123});
    };

    return (
        <main className={s.main}>
            <div className={s.root}>
                <div className={s.topFrontend}>
                    {/*<Image className={s.imgIvan} src={'/image/popal.png'} alt={'traktor'} width={320} height={320}/>*/}
                    {/*<Image className={s.imgAndrew}  src={'/image/popal2.png'} alt={'traktor'} width={320} height={320}/>*/}
                    {/*<Image className={s.imgKirill}  src={'/image/popal3.png'} alt={'traktor'} width={320} height={320}/>*/}
                    <div className={s.img_fake}/>
                    <div className={s.img_fake}/>
                    <div className={s.img_fake}/>
                    <div
                        style={{
                            left: `${position.x}px`,
                            top: `${position.y}px`,
                        }}
                        onClick={handleClick} className={`${s.img_fake} ${s.img_fake_1}`}/>
                </div>
            </div>
        </main>
    )
}
