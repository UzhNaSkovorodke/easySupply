'use client'
import s from './page.module.css'
import React, {MouseEvent, useEffect, useState} from "react";
import Image from 'next/image'
import {generateNewPos} from "@/app/components/generatePos";

interface Position {
    x: number;
    y: number;
    id: string
}

export default function Home() {

    const [positionIvan, setPositionIvan] = useState<Position>({x: 15, y: 400, id: 'ivan'});
    const [positionKirill, setPositionKirill] = useState<Position>({x: 350, y: 400, id: 'kirill'});
    const [positionAndrew, setPositionAndrew] = useState<Position>({x: 700, y: 400, id: 'andrew'});
    const [positionPaata, setPositionPaata] = useState<Position>({x: 1000, y: 0, id: 'paata'});

    const stateArr = [
        {state: positionIvan, setState: setPositionIvan},
        {state: positionKirill, setState: setPositionKirill},
        {state: positionAndrew, setState: setPositionAndrew},
        {state: positionPaata, setState: setPositionPaata}]

    const [maxPos, setMaxPos] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        setMaxPos({x: window.innerWidth, y: window.innerHeight})
    }, []);

    const setRotateAnimation = (id: string) => {
        if (id === '') return
        const div = document.getElementById(id)
        if (div) {
            div.classList.add(s.animation_on);

            setTimeout(() => {
                div.classList.remove(s.animation_on);
            }, 1000)
        }
    }

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        let maxX, maxY

        const cursorX = event.clientX;
        const cursorY = event.clientY;
        const target = event.target as HTMLDivElement
        const rect = target.getBoundingClientRect();

        if (maxPos?.y && maxPos?.x) {
            maxX = (maxPos.x - rect.width);
            maxY = (maxPos.y - rect.height);
        }


        stateArr.filter((elem) => target?.id === elem.state.id)[0].setState(generateNewPos(cursorX, cursorY, rect, maxX ?? 0, maxY ?? 0, target?.id));
        setRotateAnimation(target?.id)
    };

    return (
        <main className={s.main}>
            <div className={s.root}>
                <div className={s.topFrontend}>

                    <div className={`${s.imgIvan} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionIvan?.x}px`, top: `${positionIvan?.y}px`}}>
                        <Image src={'/image/exmple.jpg'} alt={'ivan'} width={250} id={'ivan'}
                               height={250}/>
                    </div>

                    <div className={`${s.imgKirill} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionKirill.x}px`, top: `${positionKirill.y}px`}}>
                        <Image src={'/image/leaf.webp'} alt={'kirill'} width={250} id={'kirill'}
                               height={250}/>
                    </div>

                    <div className={`${s.imgAndrew} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionAndrew.x}px`, top: `${positionAndrew.y}px`}}>
                        <Image src={'/image/exmple2.jpg'} alt={'andrew'} width={250} id={'andrew'}
                               height={250}/>
                    </div>


                    {/*<Image className={s.imgAndrew}  src={'/image/popal2.png'} alt={'traktor'} width={320} height={320}/>*/}
                    {/*<Image className={s.imgKirill}  src={'/image/popal3.png'} alt={'traktor'} width={320} height={320}/>*/}

                </div>
            </div>
        </main>
    )
}
