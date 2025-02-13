"use client"
import {useState} from "react"
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

    return (<>
        {yesPressed ? (<div className={"relative"}>
            <img className={"fixed bottom-10 left-0 m-10 h-[180px] -rotate-12 rounded-md -z-10"} src={lean}/>
            <img className={"fixed top-0 right-0 m-10 h-[140px] -rotate-6 rounded-md -z-10"} src={proposeGif}/>
            <img className={"fixed top-0 left-0 m-10 h-[200px] rotate-12 rounded-md -z-10"} src={meSelfie}/>
            <img className={"fixed bottom-10 right-0 m-10 h-[140px] rotate-6 rounded-md -z-10"} src={lap}/>
        </div>) : (<div className={"relative"}>
            <img className={"fixed bottom-16 left-0 m-10 h-[150px] rotate-12 rounded-md -z-10"} src={flowers}/>
            <img className={"fixed top-0 left-0 m-10 h-[175px] rotate-6 rounded-md -z-10"} src={hug}/>
            <img className={"fixed top-0 right-0 m-10 h-[125px] -rotate-12 rounded-md -z-10"} src={realism}/>
            <img className={"fixed bottom-10 right-0 m-10 h-[200px] -rotate-6 rounded-md -z-10"} src={kiss}/>
        </div>)}

        <div className="flex h-screen flex-col items-center justify-center z-10">
            {yesPressed ? (<>
                <img
                    className="-mt-40 h-[300px] rounded-lg"
                    src={jumpingCatGif}
                />
                <h1 className="my-4 text-2xl font-medium">Your Love is Everything to Me 🥹💗</h1>
                <button
                    className={`mx-4 rounded bg-black px-4 py-2 text-white hover:bg-gray-800`}
                    onClick={() => reset()}
                >
                    Click to Replay
                </button>
            </>) : (<>
                <img
                    className="-mt-20 h-[150px] rounded-lg"
                    src={beggingCatGif}
                />
                <h1 className="my-4 text-2xl font-medium">Please be my Valentine? 🥺🙏</h1>
                <div className="flex items-center">
                    <button
                        className={`mx-4 rounded bg-green-500 px-4 font-bold py-2 text-white hover:bg-green-700`}
                        style={{fontSize: yesButtonSize}}
                        onClick={() => setYesPressed(true)}
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
                    className="m-5 h-[200px] rounded-lg"
                    src={hamsterPleadingGif}
                />)}
            </>)}
        </div>
        <footer
            className="fixed bottom-0 left-0 z-20 w-full p-4 bg-black border-t shadow-sm">
                <span className="text-sm text-white grid grid-cols-2">
                    <p className={"text-left col-span-1"}>
                        For Tara 💕
                    </p>
                    <p className={"text-right col-span-1"}>
                        Yours forever, Somethea 🙆‍♂️
                    </p>
                </span>
        </footer>
    </>)
}
