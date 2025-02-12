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
    const yesButtonSize = noCount * 32 + 16

    const handleNoClick = () => {
        setNoCount(noCount + 1)

    }

    const getNoButtonText = () => {
        const phrases = ["No", "Pretty Please Babe?", "សូមទទួលយក", "လက်ခံပေးပါ။", "I Promise to Love You", "Please Accept My Love...", "I'll Try My Best...", "Babyyyyy???", "Sorry for everything...", "I appreciate you..."]
        return phrases[noCount % (phrases.length - 1)]
    }

    const reset = () => {
        setNoCount(0)
        setYesPressed(false)
    }

    return (<>
        {yesPressed ? (

            <div className={" z-0 static"}>
                <img className={"z-0 absolute bottom-10 left-0 m-10 h-[210px] -rotate-12 rounded-md"} src={lean}/>
                <img className={"z-0 absolute top-0 left-0 m-10 h-[160px] -rotate-6 rounded-md"} src={proposeGif}/>
                <img className={"z-0 absolute top-0 right-0 m-10 h-[225px] rotate-12 rounded-md"} src={meSelfie}/>
                <img className={"z-0 absolute bottom-10 right-0 m-10 h-[160px] rotate-6 rounded-md"} src={lap}/>
            </div>) : (<div className={" z-0 static"}>
                <img className={"z-0 absolute bottom-10 left-0 m-10 h-[175px] rotate-12 rounded-md"} src={flowers}/>
                <img className={"z-0 absolute top-0 left-0 m-10 h-[175px] rotate-6 rounded-md"} src={hug}/>
                <img className={"z-0 absolute top-0 right-0 m-10 h-[150px] -rotate-12 rounded-md"} src={realism}/>
                <img className={"z-0 absolute bottom-10 right-0 m-10 h-[250px] -rotate-6 rounded-md"} src={kiss}/>
            </div>)}

        <div className="flex h-screen flex-col items-center justify-center z-10">
            {yesPressed ? (<>
                <img
                    className="-mt-40 h-[300px] rounded-lg"
                    src={jumpingCatGif}
                />
                <h1 className="my-4 text-4xl">Your Love is Everything to Me 🥹💗</h1>
                <button
                    className={`mx-4 rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-800`}
                    onClick={() => reset()}
                >
                    Click to Replay
                </button>
            </>) : (<>
                <img
                    className="-mt-20 h-[250px] rounded-lg"
                    src={beggingCatGif}
                />
                <h1 className="my-4 text-3xl">Please be my Valentine? 🥺🙏</h1>
                <div className="flex items-center">
                    <button
                        className={`mx-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                        style={{fontSize: yesButtonSize}}
                        onClick={() => setYesPressed(true)}
                    >
                        Yes 😍
                    </button>
                    <button
                        onClick={handleNoClick}
                        className="mr-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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
                        For The Myat Su Zaw 💕
                    </p>
                    <p className={"text-right col-span-1"}>
                        Yours forever, Somethea Siek 🤙
                    </p>
                </span>
        </footer>
    </>)
}
