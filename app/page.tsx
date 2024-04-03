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
    const nextImageProp = {width: 250, height: 250, alt: 'img'}

    const [positionIvan, setPositionIvan] = useState<Position>({x: 15, y: 400, id: 'ivan'});
    const [positionKirill, setPositionKirill] = useState<Position>({x: 350, y: 400, id: 'kirill'});
    const [positionAndrew, setPositionAndrew] = useState<Position>({x: 700, y: 400, id: 'andrew'});
    const [positionPaata, setPositionPaata] = useState<Position>({x: 1000, y: 400, id: 'paata'});
    const [positionSvyata, setPositionSvyata] = useState<Position>({x: 1300, y: 400, id: 'svyata'});

    const stateArr = [
        {state: positionIvan, setState: setPositionIvan},
        {state: positionKirill, setState: setPositionKirill},
        {state: positionAndrew, setState: setPositionAndrew},
        {state: positionPaata, setState: setPositionPaata},
        {state: positionSvyata, setState: setPositionSvyata}]

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
        const maxTransform = {maxX: 0, maxY: 0}

        const cursorTransform = {cursorX: event.clientX, cursorY: event.clientY};
        const target = event.target as HTMLDivElement
        const rect = target.getBoundingClientRect();

        if (maxPos?.y && maxPos?.x) {
            maxTransform.maxX = (maxPos.x - rect.width);
            maxTransform.maxY = (maxPos.y - rect.height);
        }

        if (target.id !== 'paata') stateArr
            .filter((elem) => target?.id === elem.state.id)[0]
            ?.setState(generateNewPos(cursorTransform, rect, maxTransform, target?.id));
        setRotateAnimation(target?.id)

        if (target.id === 'paata') alert('ТЫ ЧЕ УМНИК?? САМ УВОЛЕН')
    };

    return (
        <main className={s.main}>
            <div className={s.root}>
                <div className={s.topFrontend}>

                    <div className={`${s.imgIvan} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionIvan?.x}px`, top: `${positionIvan?.y}px`}}>
                        <Image src={'/image/popal.png'} id={'ivan'} {...nextImageProp}/>
                    </div>

                    <div className={`${s.imgKirill} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionKirill.x}px`, top: `${positionKirill.y}px`}}>
                        <Image src={'/image/popal3.png'} id={'kirill'} {...nextImageProp}/>
                    </div>

                    <div className={`${s.imgAndrew} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionAndrew.x}px`, top: `${positionAndrew.y}px`}}>
                        <Image src={'/image/popal2.png'} id={'andrew'} {...nextImageProp}/>
                    </div>

                    <div className={`${s.imgPaata} ${s.img}`} onClick={handleClick}
                         style={{left: `${positionPaata.x}px`, top: `${positionPaata.y}px`}}>
                        <Image src={'/image/popal4.png'} id={'paata'} {...nextImageProp}/>
                    </div>

                    <div className={`${s.imgSvyata} ${s.img}`} onMouseEnter={handleClick} onClick={handleClick}
                         style={{left: `${positionSvyata.x}px`, top: `${positionSvyata.y}px`}}>
                        <Image src={'/image/img.png'} id={'svyata'} {...nextImageProp}/>
                    </div>

                </div>
            </div>
        </main>
    )
}
