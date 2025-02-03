import Image from 'next/image'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

export default function Header() {

    return (
        <div className="relative w-full h-64 md:h-96">
            <Image
              src={"/images/welding-cover.png"}
              alt={"Welding"}
              layout="fill"
              objectFit="cover"
              // className="rounded-lg"
            //   priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30">
                <div className="h-full flex justify-center items-center">
                    <div className="flex flex-col items-center gap-3 text-white">
                    <h2 className="text-4xl font-bold">About us</h2>
                    <KeyboardArrowDownSharpIcon style={{fontSize: 30}} />
                    </div>
                </div>
            </div>
          </div>
    )
}