import qrImage from "./assets/image-qr-code.png";

const QrCard = () => {
  return (
    <div className='bg-white  rounded-2xl max-w-sm p-4'>
        <img src={qrImage} alt="QR" className="rounded-lg"/>
        <div className="space-y-4">
        <h2 className="font-bold text-center text-xl mt-2">
         Improve your front-end <br/> 
         Skills by building projects
         </h2>
         <p className=" text-sm text-slate-500  text-center mb-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>

    </div>
  )
}

export default QrCard