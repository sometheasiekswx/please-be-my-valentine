"use client"
import {useState} from "react"
import useSound from 'use-sound';
import beggingCatGif from './assets/begging-cat.gif'
import jumpingCatGif from './assets/jumping-cat.gif'
import flowers from './assets/flowers.jpg'
import hug from './assets/hug.jpg'
import realism from './assets/realism.jpg'
import kiss from './assets/kiss.gif'
import lap from './assets/lap.jpg'
import meSelfie from './assets/me-selfie.jpeg'
import hamsterPleadingGif from './assets/hamster-pleading.gif'
import proposeGif from './assets/propose.gif'
import lean from './assets/lean.jpg'
import yipeeSound from './assets/yipee.mp3'
import photoboothGif from './assets/photobooth.gif'

export default function Page() {
    const [noCount, setNoCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)
    const yesButtonSize = noCount * 16 + 20

    const handleNoClick = () => {
        setNoCount(noCount + 1)

    }

    const getNoButtonText = () => {
        const phrases = ["No", "Pretty Please Babe?", "សូមទទួលយក", "လက်ခံပေးပါ။", "I Promise to Love You", "Please Accept My Love...", "I'll Try My Best...", "Babyyyyy???", "I love you...", "I appreciate you..."]
        return phrases[noCount % (phrases.length - 1)]
    }

    const reset = () => {
        setNoCount(0)
        setYesPressed(false)
    }

    const [playYipee] = useSound(yipeeSound, {
        volume: 0.25,
    });

    return (<>
        {yesPressed ? (<div className={"relative"}>
            <img
                className={"fixed bottom-10 sm:bottom-12 sm:left-0 left-0 h-48 sm:h-64 lg:h-80 -rotate-12 rounded-md -z-10"}
                src={photoboothGif}/>
            <img
                className={"fixed -top-5 sm:top-0 lg:h-96 -right-2 sm:right-0 h-44 lg:right-2 sm:h-72 -rotate-6 rounded-md -z-10"}
                src={lean}/>
            <img className={"fixed top-0 -left-5 h-36 sm:h-52 lg:h-64 rotate-12 rounded-md -z-10"} src={lap}/>
            <img className={"fixed bottom-5 -right-2 h-52 sm:h-96 lg:h-[26rem] lg:right-2 rotate-6 rounded-md -z-10"}
                 src={meSelfie}/>
        </div>) : (<div className={"relative"}>
            <img
                className={"fixed bottom-10 left-0 h-40 sm:h-52 lg:h-80 lg:bottom-20 lg:left-5 rotate-12 rounded-md -z-10"}
                src={flowers}/>
            <img className={"fixed -top-5 left-0 h-40 sm:h-56 lg:h-96 rotate-6 lg:top-0 lg:left-2 rounded-md -z-10"}
                 src={hug}/>
            <img
                className={"fixed -top-5 -right-2 h-36 sm:h-48 lg:h-80 -rotate-12 lg:top-0 lg:right-5 rounded-md -z-10"}
                src={realism}/>
            <img
                className={"fixed bottom-5 right-0 h-52 sm:h-64 lg:h-96 lg:bottom-16 -rotate-6 lg:right-2 rounded-md -z-10"}
                src={kiss}/>
        </div>)}

        <div className="flex h-screen flex-col items-center justify-center z-10">
            {yesPressed ? (<>
                <img
                    className="-mt-40 -mb-5 h-44 rounded-md"
                    src={jumpingCatGif}
                />
                <h1 className="my-4 text-2xl sm:text-3xl font-medium text-white">Your Love is Everything to Me 🥹💗</h1>
                <button
                    className={`mx-4 rounded bg-black px-4 py-2 text-white hover:bg-gray-800`}
                    onClick={() => reset()}
                >
                    Click to Replay
                </button>
                <img
                    className="mt-4 h-24 sm:h-44 lg:h-52 rounded-md"
                    src={proposeGif}
                />
            </>) : (<>
                <img
                    className="-mt-20 h-32 sm:h-48 rounded-md"
                    src={beggingCatGif}
                />
                <h1 className="my-4 text-2xl font-medium sm:text-3xl text-white">Please be my Valentine? 🥺🙏</h1>
                <div className="flex items-center">
                    <button
                        className={`mx-4 rounded bg-green-500 px-4 font-medium py-2 text-white hover:bg-green-700`}
                        style={{fontSize: yesButtonSize}}
                        onClick={() => setYesPressed(true)}
                        onMouseUp={() => {
                            playYipee();
                        }}
                    >
                        Yes 😍
                    </button>
                    <button
                        onClick={handleNoClick}
                        className="mr-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                        {noCount === 0 ? "No" : getNoButtonText()} 😔
                    </button>
                </div>
                {noCount > 2 && (<img
                    className="-mb-5 m-5 h-32 sm:h-44 rounded-md"
                    src={hamsterPleadingGif}
                />)}
            </>)}
        </div>
        <footer
            className="fixed bottom-0 left-0 z-20 w-full p-2 bg-black shadow-sm">
                <span className="text-sm text-white grid grid-cols-2">
                    <p className={"text-left col-span-1"}>
                        For Tara 💕
                    </p>
                    <p className={"text-right col-span-1"}>
                        Yours forever, Sam 🙆‍♂️
                    </p>
                </span>
        </footer>
    </>)
}
