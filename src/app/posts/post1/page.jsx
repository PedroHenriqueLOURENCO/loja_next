import Image from "next/image";
import Link from "next/link";

export default function Post1() {
  return (
    <div>
        <h1>POST - 1</h1>
        <div>
            <figure>
             <Image src="/img/esfirra.png" alt="junk food" width={350} height={250}/>
             <figcaption>
                <Link  href="/">Voltar</Link>
            </figcaption>  
            </figure>
        </div>
    </div>
  )
}
